import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/Category';
import { Observable, } from 'rxjs';
import { map } from "rxjs/operators";

const httpOptions =
  { headers: new HttpHeaders ({'ContentType' : 'application/json'}) };
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8000/api/attribs/category';
  category:  Category ;
  constructor(private http: HttpClient) { }
  
  getCategoryList() {
    return this.http.get<Category[]>(`${this.baseUrl}` , httpOptions);
  }
  getCategory(id: any ): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCategoryName(name: any ): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByName/${name}`);
  }
}

