import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TodosProvider } from '../../providers/todos/todos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos : any;
  
  
  
  constructor(public navCtrl: NavController, public todoService: TodosProvider, public alertCtrl: AlertController) {
    
     }


    
     ionViewDidLoad(){
      this.todoService.getTodos().then((data) => {
        this.todos = data;
      });
     
    }
  }