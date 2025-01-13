import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('/admin/category');
  }

  public addNewCategory(category: string): Observable<any> {
    const payload = {
      category: category
    };
    return this.http.post('/admin/category', payload);
  }
}
