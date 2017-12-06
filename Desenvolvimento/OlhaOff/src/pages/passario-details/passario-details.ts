import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { NativeAudio } from "@ionic-native/native-audio";


/**
* Generated class for the PassarioDetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-passario-details',
 templateUrl: 'passario-details.html',
})
export class PassarioDetailsPage {
 data: any;



 constructor(public nativeAudio: NativeAudio,public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.data = this.navParams.get('feed');
  }

 ionViewDidLoad() {
   console.log('ionViewDidLoad PassarioDetailsPage');
 }

   

}
