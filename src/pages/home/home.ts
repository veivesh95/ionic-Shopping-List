import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { ShoppingListService } from "../../service/shopping-list/shopping-list.service";
import { Observable } from "rxjs/Observable";
import { Item } from "../../model/item/item.module";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  ShoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService
  ) {
    this.ShoppingList$ = this.shopping
      .getShoppingList()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      });
  }
}
