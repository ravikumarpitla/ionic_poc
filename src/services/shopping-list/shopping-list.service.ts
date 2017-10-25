import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Item} from '../../models/item/item.model';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ShoppingListService{
    private shoppingListRef= this.db.list<Item>('shoping-list');

    constructor(private db:AngularFireDatabase,public alertCtrl: AlertController)
    {
    
    }

    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item:Item)
    {
        return this.shoppingListRef.push(item);
    }

    editItem(item:Item)
    {
        return this.shoppingListRef.update(item.key,item);
    }

    deletItem(item:Item)
    {

        return this.shoppingListRef.remove(item.key);
    }

    
    showAlert(name:string,title:string) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle:title+'d '+ name,
          buttons: ['OK']
        });
        alert.present();
      }
}