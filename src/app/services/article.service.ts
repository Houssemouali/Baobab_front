import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';
import { ContentDetails } from '../models/ContentDetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private baseURL = 'http://127.0.0.1:8000/api/articles/';
private article: Article;
private ContentDetails: ContentDetails;
  constructor(private http: HttpClient) { }

  AddArticle( article: Object ): Observable<Object> {
    article.categories = article.categories.cat_texts;
    //article.publish_date=article.publish_date;
    return this.http.post(this.baseURL, article, {
      headers: {
        Authorization:  'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmZhYjliMDkyNWY5YmUxMzIxYWUxYzg4YzY5YjYzMWJiMmNhMmRhZWZjMjZkNWMyNTk4MmQ2NjY4YTc3M2NiYjFmYzJjOWI3MDVjNjgzNGYiLCJpYXQiOjE1OTE3Nzc5NzIsIm5iZiI6MTU5MTc3Nzk3MiwiZXhwIjoxNjIzMzEzOTcyLCJzdWIiOiIyIiwic2NvcGVzIjpbIkFkbWluaXN0cmF0b3IiXX0.iEUDFmPl-13q5v-rn84n9g3HmeDXaQ986HBRd8ekiheyh0rmro9lvXjzyRNiI9x2F70mIPmhaocw7jmr8VNpwBkeeISQwFTb_JZFkvn1zI5WwQvfOKB1NIkCPhdP8NR3UolZ2JfiqgTaoO7jI3xHmzXPdT6mH6sQ-281mB6umxr7LNzWupwxbNLHoAul9bX5qyeDtnymIWp8lu71-RzrJd9TgnrcoQYiP8fHaI1dXy2hWsIshm80s7Ihd0bzqzegCAOYNC8l9TmOBAQ0eWyTiBbTvOvQc2F5dAwqa5toKjr6KgAfpmHLL3BMLf1mtByJFztLrR7mLtQTuEAyD8Q7MdHFII3VgKksPmUJQ4C8kDPF9XzSVpaTZk4g9qvzVw5XhowbjR3BqvwYtYWJGbg67210247D_JehIGiGUjCPmcK2fd30eZZg-EXMVnK8sT39Tyvx321qVwXa8w0yL7rZ2pTlb_PRFLOfuSzHkS3s0zkVluv5dLEjG3UVBl6bJdfNL9Jj2a7MAFvizXg1kQDgAIcr4CWQLfuCblkT0lOiX9KJK1518jRQpCxN3TOu54gw-Y5WwMcaGN4ASpsEe4M0NFtmFvonkBpn8Zk5izfcwHrWK4jIPwidkwnUYXD2HLKiO_Uj3ahaG_RuZK1NrDz1SvNMuRyFmCaNcM1ydyHptQ0',
      }
    } );
  }

  DeleteArticle(id: number ): Observable<Object> {
    return this.http.delete(this.baseURL + id);
  }

  getByCat(id:number):Observable<Object>{
    return this.http.get(this.baseURL+'byCat/'+id);
  }
//offst:any
  getAll(): Observable <Object> {
  //offst=0;
    return this.http.get(this.baseURL+'all/');
  }
  getArticle() { 
    return  this.http.get(`${this.baseURL}` ); 
  }

  getArticleList() {
    return this.http.get<Article[]>(`${this.baseURL}` , httpOptions );
  }

  editArticle(idArticle: any): Observable<any> {

    return this.http.get(`${this.baseURL}edit/${idArticle}`);
  }
  getArticleId(idArticle: any): Observable<any> {

    return this.http.get(`${this.baseURL}${idArticle}`);
  }
  //  return this.http.get(`${this.baseUrl}/${id}`).pipe(map(pp => pp));}
  get(id) {
    return this.http.get(`${this.baseURL}${id}`);
  }

  getLifestyle() {
    return this.http.get<Article[]>(`${this.baseURL}ByCatlifestyle/`);
  }

  getTechnologie() {
    return this.http.get<Article[]>(`${this.baseURL}ByCattech/`);
  }

  getEntreprise() {
    return this.http.get<Article[]>(`${this.baseURL}ByCatEntreprise/`);
  }

  getEconomie() {
    return this.http.get<Article[]>(`${this.baseURL}ByCatEco/`);
  }
  get1Art() {
    return this.http.get<Article[]>(`${this.baseURL}LastArticle/`);
  }

  get4Art() {
    return this.http.get<Article[]>(`${this.baseURL}Last4Article/`);
  }


  getValid() {
    return this.http.get(`${this.baseURL}validarticle/`);
  }
  getEncours() {
    return this.http.get(`${this.baseURL}pendingarticle/`);
  }
  Update(idArticle: number, value: any): Observable<Object> {
    console.log(typeof idArticle);
    return this.http.put(`${this.baseURL}changeStatus/${idArticle}`, value , httpOptions);
  }


}
