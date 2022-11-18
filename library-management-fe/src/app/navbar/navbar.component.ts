import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin = false;
  user!:String;
  admin =false;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    if(localStorage.getItem('TOKEN')){
      this.isLoggedin = true
      this.user = "Hi, "+localStorage.getItem('USERNAME')
      if(localStorage.getItem('ROLE') =='admin'){
        this.admin = true
      }
    }
  }

  logout(){
    localStorage.clear()
    this.isLoggedin = false
    this.router.navigate(['login'])
  }

}
