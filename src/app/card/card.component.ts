import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/interfaces/product';
import { GlobalstateService } from '../globalstate.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private globalState:GlobalstateService){}

  @Input()item!:Product

  @Input() ind:number | undefined

  @Output() customEvent = new EventEmitter<Product>()

  selectItems():void{
    this.globalState.updateItemsInCart(this.item)
  }

}



// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Product } from 'src/interfaces/product';
// import { GlobalstateService } from '../globalstate.service';
// import { BehaviorSubject } from 'rxjs';
// import { IPurchasedItems } from 'src/interfaces/purchasedItems';
// import { UserDetails } from 'src/interfaces/userdetails';
// import { PurchaseditemsService } from '../purchaseditems.service';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {




//   private itemsInCartSubject = new BehaviorSubject<Product[]>([]);
//   itemsInCart: Product[] = [];
//   products: Product[] = [];
//   totalCheckoutCost: number = 0;
//   currentUser: UserDetails | undefined;
//   purchasedProducts: IPurchasedItems[] | undefined;
//   selectedItem: Product[]=[];
//   selectedItems: Product[] = [];

//   itemsInCart$ = this.itemsInCartSubject.asObservable();

//   @Input()item!:Product

//   @Input() ind:number | undefined

//   @Output() customEvent = new EventEmitter<Product>()

//   selectItems():void{
//     this.globalState.updateItemsInCart(this.item)
//   }

//   constructor(private globalState: GlobalstateService, private purchasedItems: PurchaseditemsService,  private router: Router) { }


//   ngOnInit(): void {
//     this.globalState.itemsInCartSubscription.subscribe((res) => {
//       this.itemsInCart = res;
//     });
//     const storedItems = localStorage.getItem('cartItems');
//     if (storedItems) {
//       this.itemsInCart = JSON.parse(storedItems);
//     }
//     this.globalState.checkoutPrice.subscribe((res) => {
//       this.totalCheckoutCost = res;
//     });

//     this.globalState.currentUserSubscription.subscribe((res) => {
//       this.currentUser = res;
//       if (this.currentUser) {
//         console.log("u--->", this.currentUser);
//         this.purchasedItems.getPuchasedItems(this.currentUser.email).subscribe((res) => {
//           console.log("res-->", res);
//           this.purchasedProducts = res;
//           console.log("r-->", this.purchasedProducts);
//         });
//       }
//     });

//     this.globalState.productsSubscription.subscribe((res) => {
//       this.products = res;
//     });

//     const storedItem = localStorage.getItem('selectedItems');
//     if (storedItem) {
//       this.selectedItems = JSON.parse(storedItem);
//     }

//     const storedSelectedItem = localStorage.getItem('selectedItem');
//     if (storedSelectedItem) {
//       this.selectedItem = JSON.parse(storedSelectedItem);
//     }
//     const selectedItemsString = localStorage.getItem('selectedItems');
//     if (selectedItemsString) {
//       this.selectedItems = JSON.parse(selectedItemsString)}
//   }

//   updateItemsInCart(item: Product) {
//     // Retrieve existing items from local storage
//     let existingItems: Product[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

//     // Add the new item to the existing items
//     existingItems.push(item);

//     // Update local storage with the updated cart items
//     localStorage.setItem('cartItems', JSON.stringify(existingItems));

//     // Update the itemsInCartSubject to reflect the changes
//     this.itemsInCartSubject.next(existingItems);
//   }

//   removeFromCart(index: number): void {
//     console.log(index);
//     console.log(this.itemsInCart);
//     this.globalState.removeItemsInCart(index);
//   }
//   showProductDetails(itemId: number, item: Product): void {
//     let existingItems: Product[] = JSON.parse(localStorage.getItem('selectedItems') || '[]');
//     existingItems.push(item);
//     localStorage.setItem('selectedItems', JSON.stringify(existingItems));
//     localStorage.setItem('selectedItem', JSON.stringify(item));
//     this.router.navigate(['/item-details', itemId]);
//   }
//   removeFromSelectedItems(selectedItem: Product): void {
//     const index = this.selectedItems.indexOf(selectedItem);
//     if (index !== -1) {
//       this.selectedItems.splice(index, 1);
//       localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
//     }
//   }

// }
