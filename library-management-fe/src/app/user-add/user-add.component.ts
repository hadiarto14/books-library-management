import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm!: FormGroup
  id!: number;
  isAddMode!: boolean;

  constructor(public fb: FormBuilder, private userService:UserService,private router: Router, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      'username': fb.control('', (Validators.required)),
      'password': fb.control('', (Validators.required)),
      'role': fb.control(0, (Validators.required)),
      'enabled': fb.control(0, (Validators.required)),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.userService.getUser(this.id).pipe(first()).subscribe(x => {
        this.userForm.patchValue(x)
      })
    }
  }

  validateForm() {
    Object.keys(this.userForm.controls).forEach((key: string) => {
      this.userForm.get(key)!.markAsTouched();
    })
  }

  submit(){
    if(this.isAddMode){
      if (this.userForm.valid) {
        this.addUser();
      }
    }else{
      this.updateUser();
    }

  }

  cancel(){
    this.router.navigate(['admin/user'])
  }

  private addUser(){
    this.userService.addUser(this.userForm.getRawValue() as User)
    .subscribe(x=>this.router.navigate(['admin/user']))
  }

  private updateUser(){
    this.userService.updateUser(this.id, this.userForm.getRawValue() as User)
    .subscribe(x=>this.router.navigate(['admin/user']))
  }

}
