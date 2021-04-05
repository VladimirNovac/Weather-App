import { Component } from '@angular/core';
import { Item, NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from "../../providers/weather/weather";
import { NewsProvider } from '../../providers/news/news';
import { CityImagesProvider } from '../../providers/city-images/city-images';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayCity: string;
  displayTemperature: string;
  displayFeelsLike: string;
  displayWeather: string;
  displayDescription: string;
  displayIcon: string;
  units: string;
  cityNotFound: string;
  newsButton = true;
  countryCode: string;
  newsArray: string[];
  newsHeadlineDisabled = true;
  newsCount: string;
  cityCodeArray: string[];
  cityImage: string;
  image: string;
  testCity: string;

  constructor(public navCtrl: NavController, private storage: Storage, private weather:WeatherProvider, private news:NewsProvider, private cityImages:CityImagesProvider) {

  }

  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
    this.storage.ready().then(() => {
      this.storage.get("city")
      .then((data) => {
        this.displayCity = data; 
       })
      .catch((error) => console.log("Problem accesing local storage"));
    })


    this.storage.get("units")
    .then((data) => {
      this.units = data;
    });
     console.log(this.displayCity);
     this.newsHeadlineDisabled = true; 
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
    console.log(this.displayCity + "1");

    this.cityImages.getCityImageCode().subscribe(data => {
      console.log("looking for cities...")
      for(let city of data._links["ua:item"] ){
        if(city.name == this.displayCity ){
          this.cityImage = city.href;
          this.cityImages.getCityImage(this.cityImage).subscribe(data1 => {
            this.image = data1["photos"][0].image.web;  
          });
        }
      }
    }, (error) => {
      console.log("City name not found in city database!!!")
    });

    if(this.image == null){
      this.image = "https://image.freepik.com/free-vector/town-city-street-summer-illustration_1284-23433.jpg";
    }


    this.weather.getWeather(this.displayCity, this.units).subscribe(data => {
      this.cityNotFound = null;
      this.newsButton = false;
      this.displayTemperature = data.main.temp;
      this.displayFeelsLike = data.main.feels_like;
      this.displayWeather = data.weather[0].main;
      this.displayDescription = data.weather[0].description;
      this.displayIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      this.countryCode = data.sys.country;
       
    }, (error) => {
      console.log("City Not Found!!!");
      this.cityNotFound = "City Not Found";
      this.newsButton = true;
      this.displayTemperature = null;
      this.displayFeelsLike = null;
      this.displayWeather = null;
      this.displayDescription = null;
      this.displayIcon = null;
      this.countryCode = null;
    });
  }


  getNews(){
    console.log("Getting the news...");
    this.news.getNews(this.countryCode).subscribe(data =>{
      this.newsArray = data.articles;
      this.newsHeadlineDisabled = false;
      this.newsCount = data.totalResults;
    }, (error) =>{
      console.log("Error Getting the News!!!");
    });
  }



}
