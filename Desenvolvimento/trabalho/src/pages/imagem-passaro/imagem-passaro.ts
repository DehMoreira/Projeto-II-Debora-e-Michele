import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ImagemPassaroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagem-passaro',
  templateUrl: 'imagem-passaro.html',
})
export class ImagemPassaroPage {

  public feeds: Array<string>;
  
  private url: string = "https://spreadsheets.google.com/feeds/list/1M-C8XiuaqvsS5k8L4ZEn0Y6sIzbu7eYbPdPqU1AhsqU/od6/public/values?alt=json";  

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.feeds = data.feed.entry;
     
    }); 
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagemPassaroPage');
  }

}
