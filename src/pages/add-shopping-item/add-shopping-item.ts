import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
item:Item={
  name:undefined,
  quantity:undefined,
  price:undefined
};
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopping:ShoppingListService,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

addItem(item:Item)
{
  if(this.isValid(item))
this.shopping.addItem(item).then(()=>{
  this.navCtrl.setRoot('HomePage');
});
}

isValid(item:Item)
{
 var isValid=false;
if(item.name==null)
{
  this.showAlert('Name');
  
}else if( item.quantity==null)
{
  this.showAlert('Quantity');
}else if(item.price==null)
{
  this.showAlert('Price');
}else{
isValid= true;
}
  return isValid;
}
showAlert(field:string) {
    let alert = this.alertCtrl.create({
      title: 'Add Items',
      subTitle:'Please Enter the required field: '+ field,
      buttons: ['OK']
    });
    alert.present();
  }
}
