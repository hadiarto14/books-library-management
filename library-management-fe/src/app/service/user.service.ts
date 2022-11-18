import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = "http://localhost:8080/api/users"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL)
  }
  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.baseURL+`/${id}`)
  }
  getRole(username:string):Observable<any>{
    return this.http.get("http://localhost:8080/api/userRole?username="+username)
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseURL, user)
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.baseURL+`/${id}`)
  }
  updateUser(id:number, user:User):Observable<User>{
    return this.http.put<User>(this.baseURL+`/${id}`, user)
  }
}
