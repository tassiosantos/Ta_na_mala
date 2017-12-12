import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


//PÁGINA DA VIAGEM

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  travelname: string;
  description: string;
  date: any;
  // HelloIonicPage = this.HelloIonicPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.travelname = this.navParams.get('travelname');
    this.description = this.navParams.get('traveldescription');
    this.date = this.navParams.get('date');
    // this.navbar.backButtonClick() 
  }





}
