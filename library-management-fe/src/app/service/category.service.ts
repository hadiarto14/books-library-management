import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL: string = "http://localhost:8080/api/categories"
  constructor(private http:HttpClient) { }

  getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseURL)
  }
  getCategory(id:number):Observable<Category>{
    return this.http.get<Category>(this.baseURL+`/${id}`)
  }
  addCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.baseURL, category)
  }
  deleteCategory(id:number):Observable<Category>{
    return this.http.delete<Category>(this.baseURL+`/${id}`)
  }
  updateCategory(id:number, category:Category):Observable<Category>{
    return this.http.put<Category>(this.baseURL+`/${id}`, category)
  }
}
