import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL: string = "http://localhost:8080/api/books"
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-type': 'application/json', 
  //     'Access-Control-Allow-Origin': '*'
  //   })
  // }
  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL)
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.baseURL + `/${id}`)
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL, book);
  }
  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.baseURL + `/${id}`, book)
  }
  deleteBook(id: Number): Observable<Book> {
    return this.http.delete<Book>(this.baseURL + `/${id}`)
  }
}
