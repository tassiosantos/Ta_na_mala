import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViagemProvider } from '../../providers/viagem/viagem';
import { ItemDetailsPage } from '../item-details/item-details';
import { ListPage } from '../list/list'



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  name: any;
  date: number;
  viagens: Array<{}>;  
  
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viagem: ViagemProvider) {

  }

    public getTravel(){
      this.viagens = this.viagem.getTravel();
    }

    public newTravelPage(){
      this.navCtrl.push(ListPage);
    }


    public goToTravel(){
      this.navCtrl.setRoot(ItemDetailsPage);
    }

  ionViewDidLoad(){
  this.getTravel();
  }


}
