import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CityImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityImagesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CityImagesProvider Provider');
  }

  getCityImageCode() : Observable<any> {
    return this.http.get("https://api.teleport.org/api/urban_areas");
  }

  getCityImage(city: string){
    return this.http.get(city + "images/");
  }
  

}
