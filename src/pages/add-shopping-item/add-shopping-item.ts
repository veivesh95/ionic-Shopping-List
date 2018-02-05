import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Item } from "../../model/item/item.module";
import { ShoppingListService } from "../../service/shopping-list/shopping-list.service";
import { ToastService } from "../../service/components/ToastService";

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-shopping-item",
  templateUrl: "add-shopping-item.html"
})
export class AddShoppingItemPage {
  item: Item = {
    name: "",
    quantity: undefined,
    price: undefined
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService  
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddShoppingItemPage");
  }

  addItem(item: Item) {
    // this.shopping.addItem(item).then(ref => {
    //   console.log(ref.key);
    // });
    this.shopping.addItem(item).then(ref => {
      console.log(ref.key);
      this.toast.show(`${item.name} has been added!`);
      this.navCtrl.setRoot("HomePage", { key: ref.key });
    });
  }
}