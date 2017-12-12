import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ViagemProvider } from '../../providers/viagem/viagem';
import { ItemDetailsPage } from '../item-details/item-details';
import { DatePicker } from '@ionic-native/date-picker';

//PAGINA NOVA VIAGEM

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  newtravelname: string;
  newtraveldescription: string;
  mydate: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viagem: ViagemProvider,
              public datePicker: DatePicker) {
  }





  newTravel(){
    
    this.viagem.newTravel(this.newtravelname,this.newtraveldescription,this.mydate);
     
    this.navCtrl.push(ItemDetailsPage,{
      travelname: this.newtravelname,
      traveldescription: this.newtraveldescription,
      date: this.mydate,
    });


  } 


}
