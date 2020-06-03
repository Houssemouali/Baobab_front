import { Injectable } from '@angular/core';
import { JournalistSignup } from '../models/Journalist-signup';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../Auth/jwt-response';
import { JournalistLogin } from '../models/Journalist-login';
import {UserService} from './user.service';

const httpOptions = { headers: new HttpHeaders ({'ContentType' : 'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class JournalistService  {


  private baseUrl = 'http://localhost:8000/api/auth';

  private baseURl = 'http://localhost:8080/api/journalist' ;
  constructor(private http: HttpClient) {
  }

  private journaliste: JournalistSignup ;

  signUpJ(journaliste: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, journaliste);
  }


  signInJournalist(credentials: JournalistLogin) {
    return this.http.post(`${this.baseUrl}` + `/login`, credentials , httpOptions);
  }


  getAll() {
    return this.http.get(`${this.baseURl}` + `/`);
  }

  getEncours() {
    return this.http.get(`${this.baseURl}` + `/PendingJournalist`);
  }


  Update(idUser: number, value: any): Observable<Object> {
    console.log(typeof idUser);
    return this.http.put(`${this.baseURl}/changeStatus/${idUser}`, value , httpOptions);
  }


  updateJ(idUser: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseURl}` + `/j/` + idUser, value);
  }


  get( id: number) {
    return this.http.get(`${this.baseURl}/edit/${id}`);
  }

  getJ (journaliste: JournalistSignup ) {
    return this.http.put(`${this.baseUrl}`, journaliste, {
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('token')}),
    });
  }

  /* signUp(info:JournalistSignup):Observable<string>{
     return this.http.post<string>(this.signupUrl,info,httpOptions)
   }*/

/*  GetMyArticle(id:number):Observable<any>{
    return this.http.get(this.baseURL+id);
  }*/

}
