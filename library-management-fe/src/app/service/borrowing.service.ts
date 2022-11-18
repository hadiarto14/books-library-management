import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrowing } from '../model/borrowing';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  private baseURL: string = "http://localhost:8080/api/borrowing";

  constructor(private http:HttpClient) { }

  getAllBorrowing(): Observable<Borrowing[]> {
    return this.http.get<Borrowing[]>(this.baseURL)
  }
  getBorrowing(id: number): Observable<Borrowing> {
    return this.http.get<Borrowing>(this.baseURL + `/${id}`)
  }
  addBorrowing(borrowing: Borrowing): Observable<Borrowing> {
    return this.http.post<Borrowing>(this.baseURL, borrowing);
  }
  updateBorrowing(id: number, borrowing: Borrowing): Observable<Borrowing> {
    return this.http.put<Borrowing>(this.baseURL + `/${id}`, borrowing)
  }
  deleteBorrowing(id: Number): Observable<Borrowing> {
    return this.http.delete<Borrowing>(this.baseURL + `/${id}`)
  }
}
