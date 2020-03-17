import { Injectable } from '@angular/core';
import { Tags } from '../models/Tags';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions =
  { headers: new HttpHeaders ({'ContentType' : 'application/json'}) };
@Injectable({
  providedIn: 'root'
})
export class TagService {
  private baseUrl = 'http://localhost:8080/api/tag/';
  tags:  Tags ;
  handleErrors: any;
  constructor(private http: HttpClient) { }
  getTagList() {
    return this.http.get<Tags[]>(`${this.baseUrl}` , httpOptions);
  }

  getTag(tag: any ): Observable<any> {
    return this.http.get(`${this.baseUrl}` + tag);
  }



  get( id: number) {
    return this.http.get(`${this.baseUrl}${id}`);
  }

}
