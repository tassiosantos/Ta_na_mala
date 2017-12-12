import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the ViagemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViagemProvider {

  name: string;
  travelist = [];
    
  // item: Array<{itemname:string, description: string, quantity: number}>;
  


  constructor(public http: HttpClient,
              public nativeStorage: NativeStorage) {
    console.log('Hello ViagemProvider Provider');
    
  }

  //Adiciona nova viagem
  newTravel(travelname, traveldescription, mydate){
    // Atualiza a lista de viagem
    let list = {name: travelname, description:traveldescription, date: mydate ,  malas: {}};
    this.travelist.push(list);
    this.nativeStorage.setItem('travelist', this.travelist).then(
      () => console.log('Nova lista de viagens salva'),
      error => console.error('Error storing travelist item', error)
    );
  }

  //Atualiza viagem especifica
  // attTravel(travelname, newtravelname, newtraveldescription, mydate){
  //   //Busta lista de viagens
  //   let travelist = this.nativeStorage.getItem('travelist');
  //   //Atualiza lista de viagens
  //   for (var k in travelist){
  //     if(k['date'] == mydate){
        
  //       k['name'] = newtravelname;
  //       k['description'] = newtraveldescription; 
  //     }
  //   }
  //   // //Busca viagem
  //   // let viagem = this.nativeStorage.getItem(travelname).then(
  //   // () => this.nativeStorage.setItem(newtravelname, viagem));
  //   // this.nativeStorage.remove(travelname);

  // }


  //Recupera viagem especifica
  getTravel(){
    return this.travelist;

  }

  // Adiciona novo item
  // newItem(travelname: string, name:string, itemdescription:string ){
  //   // Recupera a viagem salva
  //   let viagem = this.nativeStorage.getItem(travelname).then(
  //     data => console.log(data),
  //     error => console.error(error)
  //   );
  //   // Adiciona o item na lista de itens da viagem
  //   viagem[1] = viagem[1].push({name:name, description: itemdescription, quantity: 0});
  //   // Salva a viagem novamente
  //   this.nativeStorage.setItem(travelname, viagem[1]).then(
  //     () => console.log('Stored item!'),
  //     error => console.error('Error storing item', error)
  //   );

  // }

  // //Atualiza item especifico
  // saveItem(travelname:string, itemname:string, ){
  //   //
  // }







}





