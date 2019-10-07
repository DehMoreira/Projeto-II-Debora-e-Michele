import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { IonicPage, NavController } from 'ionic-angular';
import { ImagemPassaroPage } from "../imagem-passaro/imagem-passaro";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-som',
  templateUrl: 'som.html',
})
export class SomPage {
 
  public feeds: Array<string>;
  
  private url: string = "https://spreadsheets.google.com/feeds/list/1M-C8XiuaqvsS5k8L4ZEn0Y6sIzbu7eYbPdPqU1AhsqU/od6/public/values?alt=json";  

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.feeds = data.feed.entry;
     
    }); 
  }
     
  ionViewDidLoad() {
    console.log('ionViewDidLoad SomPage');
  }


  }

  
  

 