import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: string = "http://localhost:8080/api/authenticate"
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {}

  login(data:string):Observable<any>{
    return this.http.post(this.baseURL, data)
  }

  isLoggedin() {
    return localStorage.getItem('TOKEN') !== null;
  }

  getRole(){
    return localStorage.getItem('ROLE');
  }
}
