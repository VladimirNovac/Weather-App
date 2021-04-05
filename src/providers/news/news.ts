import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(countryCode: string) : Observable<any> {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=" + countryCode + "&pageSize=5&apiKey=90b2272f87f049d38a5ce148b342dd96");
  }

}
