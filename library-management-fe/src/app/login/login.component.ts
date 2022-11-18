import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  submitted = false;
  constructor(public fb: FormBuilder, private router: Router, private loginService: LoginService, private userService: UserService) {
    this.loginForm = this.fb.group({
      'username': fb.control('', (Validators.required)),
      'password': fb.control('', (Validators.required)),
    })
  }

  ngOnInit(): void {}

  validateForm() {
    Object.keys(this.loginForm.controls).forEach((key: string) => {
      this.loginForm.get(key)!.markAsTouched();
    })
  }

  submit() {
    this.validateForm()
    this.submitted = true
    this.loginService.login(this.loginForm.getRawValue()).subscribe(x => {
      if (x) {
        Swal.fire(
          'Login Success!',
          'You will be redirecring.',
          'success'
        ).then(value => {
          this.userService.getRole(x.username).subscribe(y => {
            localStorage.setItem('TOKEN', x.token)
            localStorage.setItem('USERNAME', x.username)
            localStorage.setItem('ROLE', y.role)
            this.router.navigate(['']).then(() => {
              window.location.reload();
            });
          })
        })
      } else {
        Swal.fire({
          title: "Login Failed",
          text: " Unknown error occured when trying to login",
          icon: "error",
        })
      }
    })
  }

}
