import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnBook } from '../model/return-book';

@Injectable({
  providedIn: 'root'
})
export class ReturnBookService {
  private baseURL: string = "http://localhost:8080/api/returnbook"
 
  constructor(private http:HttpClient) { }

  getAllReturnBook():Observable<ReturnBook[]>{
    return this.http.get<ReturnBook[]>(this.baseURL)
  }
  getReturnBook(id:number):Observable<ReturnBook>{
    return this.http.get<ReturnBook>(this.baseURL+`/${id}`)
  }
  addReturnBook(returnBook:ReturnBook):Observable<ReturnBook>{
    return this.http.post<ReturnBook>(this.baseURL, returnBook)
  }
  updateReturnBook(id:number, returnBook:ReturnBook):Observable<ReturnBook>{
    return this.http.put<ReturnBook>(this.baseURL+`/${id}`,returnBook)
  }
  deleteReturnBook(id:number):Observable<ReturnBook>{
    return this.http.delete<ReturnBook>(this.baseURL+`/${id}`)
  }
}
