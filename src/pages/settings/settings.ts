import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  units: string;
  newCityName: string;
  cityName: string;
  changedName: string;
  //defaultCityName = "Galway";

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveSettings(){
    this.storage.clear();
    this.storage.set("units", this.units);
    if(this.newCityName != null && this.newCityName != ""){
      this.changedName = this.titleCase(this.newCityName);
      this.newCityName = this.changedName;
      this.cityName = this.newCityName;
      this.storage.set("city", this.cityName);
      this.storage.set("city2", this.cityName);
    } else {
      this.storage.set("city", "Galway");
    }
    this.navCtrl.popToRoot();
  }

  ionViewWillEnter(){
    this.storage.get("units")
    .then((data) => {
      if(data == null){
        this.units = "Metric";
      } else {
        this.units = data;
      }
     })
    .catch((error) => alert("Problem accesing local storage"));

    this.storage.get("city")
    .then((data) => {
      if(data == null){
        this.newCityName = null;
      } else {
        this.newCityName = data;
      }
     })
    .catch((error) => alert("Problem accesing local storage"));
  }

  titleCase(text : string) {
    let sentence = text.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
    return sentence.join(" ");
  }

}
