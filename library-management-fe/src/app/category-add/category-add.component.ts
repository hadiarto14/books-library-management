import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryForm!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  submitted=false;
  constructor(public fb: FormBuilder,private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.categoryForm = this.fb.group({
      'name':fb.control('',(Validators.required)),
      'description':fb.control('',(Validators.required)),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.categoryService.getCategory(this.id).pipe(first()).subscribe(x => {
        this.categoryForm.patchValue(x)
      })
    }
  }

  validateForm() {
    Object.keys(this.categoryForm.controls).forEach((key: string) => {
      this.categoryForm.get(key)!.markAsTouched();
    })
  }

  submit(){
    this.validateForm()
    this.submitted = true
    if(this.isAddMode){
      if (this.categoryForm.valid) {
        this.addCategory();
      }
    }else{
      this.updateCategory();
    }
  }
  cancel(){
    this.router.navigate(['admin/book'])
  }


  private addCategory(){
    this.categoryService.addCategory(this.categoryForm.getRawValue() as Category).subscribe(category => this.router.navigate(['admin/category']))
  }

  private updateCategory(){
    this.categoryService.updateCategory(this.id, this.categoryForm.getRawValue() as Category).subscribe(category => {
      this.router.navigate(['admin/category'])
    })
  }

}
