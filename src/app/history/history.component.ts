import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product';
import { IPurchasedItems } from 'src/interfaces/purchasedItems';
import { UserDetails } from 'src/interfaces/userdetails';
import { GlobalstateService } from '../globalstate.service';
import { PurchaseditemsService } from '../purchaseditems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  itemsInCart: Product[] = [];
  products: Product[] = [];
  totalCheckoutCost: number = 0;
  currentUser: UserDetails | undefined;
  purchasedProducts: IPurchasedItems[] | undefined;
  selectedItem: Product | null = null;
  selectedItems: Product[] = [];

  constructor(private globalState: GlobalstateService, private purchasedItems: PurchaseditemsService,  private router: Router) { }

  ngOnInit(): void {
    this.globalState.itemsInCartSubscription.subscribe((res) => {
      this.itemsInCart = res;
    });

    this.globalState.checkoutPrice.subscribe((res) => {
      this.totalCheckoutCost = res;
    });

    this.globalState.currentUserSubscription.subscribe((res) => {
      this.currentUser = res;
      if (this.currentUser) {
        console.log("u--->", this.currentUser);
        this.purchasedItems.getPuchasedItems(this.currentUser.email).subscribe((res) => {
          console.log("res-->", res);
          this.purchasedProducts = res;
          console.log("r-->", this.purchasedProducts);
        });
      }
    });

    this.globalState.productsSubscription.subscribe((res) => {
      this.products = res;
    });

    const storedItem = localStorage.getItem('selectedItems');
    if (storedItem) {
      this.selectedItems = JSON.parse(storedItem);
    }

    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      this.selectedItem = JSON.parse(storedSelectedItem);
    }
    const selectedItemsString = localStorage.getItem('selectedItems');
    if (selectedItemsString) {
      this.selectedItems = JSON.parse(selectedItemsString)}
  }

  addToCart(item: Product): void {
    this.globalState.updateItemsInCart(item);
  }

  removeFromCart(index: number): void {
    console.log(index);
    console.log(this.itemsInCart);
    this.globalState.removeItemsInCart(index);
  }
  showProductDetails(itemId: number, item: Product): void {
    let existingItems: Product[] = JSON.parse(localStorage.getItem('selectedItems') || '[]');
    existingItems.push(item);
    localStorage.setItem('selectedItems', JSON.stringify(existingItems));
    localStorage.setItem('selectedItem', JSON.stringify(item));
    this.router.navigate(['/item-details', itemId]);
  }
  removeFromSelectedItems(selectedItem: Product): void {
    const index = this.selectedItems.indexOf(selectedItem);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
    }
  }

}
