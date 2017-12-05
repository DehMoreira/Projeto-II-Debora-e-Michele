import { Component } from '@angular/core';
import { AveService } from "../../providers/ave-service/ave-service";
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AveService]
})
	export class HomePage {
	
   	data:any;
	
		public feeds: Array<string>;
		
	
		public noFilter: Array<any>;
	
		public hasFilter: boolean = false;
	
		searchTerm: string = '';
	 
		items: any;

	  constructor(public navCtrl: NavController,public aveService: AveService) {
	    this.loadPeople();
    }
    
	loadPeople(){
	  this.aveService.load()
	  .then(data => {
			this.feeds = data.feed;
			this.noFilter = this.feeds;
	  });
	}

	
	openDetails(data) {

	
		this.navCtrl.push('PassarioDetailsPage',{feed: data});

	} 

  filterItems() {
    this.hasFilter = false;
    this.feeds = this.noFilter.filter((data) => {
        return data.Nome_Comum.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

} 
