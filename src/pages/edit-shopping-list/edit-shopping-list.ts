import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Item } from "../../model/item/item.module";
import { ShoppingListService } from "../../service/shopping-list/shopping-list.service";
import { ToastService } from "../../service/components/ToastService";

/**
 * Generated class for the EditShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-edit-shopping-list",
  templateUrl: "edit-shopping-list.html"
})
export class EditShoppingListPage {
  item: Item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService
  ) {}

  ionViewWillLoad() {
    // console.log('ionViewDidLoad EditShoppingListPage');
    // console.log(this.navParams.get('item'));
    this.item = this.navParams.get("item");
  }

  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} has been saved!`);
      this.navCtrl.setRoot("HomePage");
    });
  }

  deleteItem(item: Item) {
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.name} has been deleted!`);
      this.navCtrl.setRoot("HomePage");
    });
  }
}
