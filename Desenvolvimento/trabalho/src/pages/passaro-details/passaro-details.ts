import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { ImagemPassaroPage } from "../imagem-passaro/imagem-passaro";
/**
 * Generated class for the PassaroDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passaro-details',
  templateUrl: 'passaro-details.html',
})

export class PassaroDetailsPage {

  images = ['Andorinha-pequena-de-casa.jpg', 'Anu-branco.jpg', 'Beija-flor-dourado.jpg', 'Bem-te-vi.jpg','Canário-da-terra-verdadeiro.jpg','Caracará.jpg'];

  private url: string = "https://spreadsheets.google.com/feeds/list/1M-C8XiuaqvsS5k8L4ZEn0Y6sIzbu7eYbPdPqU1AhsqU/od6/public/values?alt=json";  
  feed: any;
  
 constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http)
 {          

  this.feed = this.navParams.get('feed');

    }

     
    goToOtherPageImagem() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ImagemPassaroPage);
}

  }