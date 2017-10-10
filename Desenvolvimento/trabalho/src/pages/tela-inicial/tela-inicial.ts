import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the TelaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicial',
  templateUrl: 'tela-inicial.html',
})
export class TelaInicialPage {

  constructor(public navCtrl: NavController) {
  }



  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HomePage);
}
  ionViewDidLoad() {
 
    console.log('ionViewDidLoad TelaInicialPage');
}

}