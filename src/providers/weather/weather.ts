import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }



  getWeather(city: string, units: string) : Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=636b6bb3278b969f32f548eec3432178");
  }

}
