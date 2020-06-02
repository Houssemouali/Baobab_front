import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Language } from '../models/Language';
import { Observable } from 'rxjs';

const httpOptions =
  { headers: new HttpHeaders ({'ContentType' : 'application/json'}) };

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseURL='http://localhost:8000/api/attribs/languages/'
  language:Language;
  handleErrors: any;

  constructor(private http:HttpClient) { }


    getLanguageList(){
    return this.http.get<Language[]>(`${this.baseURL}` , httpOptions);
    }

    getLanguage(language:any):Observable<any>{
      return this.http.get(`${this.baseURL}` + language);
    }

}
