import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product';
import { GlobalstateService } from '../globalstate.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedItem: Product | null = null;
  itemsInCart: Product[] = []

  constructor(private globalState: GlobalstateService, private router: Router) { }
  private itemsInCartSubject = new BehaviorSubject<Product[]>([]);
  itemsInCart$ = this.itemsInCartSubject.asObservable();
  ngOnInit(): void {
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem) {
      this.selectedItem = JSON.parse(storedItem);
    }
  }


  updateItemsInCart(item: Product) {
    // Retrieve existing items from local storage
    let existingItems: Product[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

    // Add the new item to the existing items
    existingItems.push(item);

    // Update local storage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(existingItems));

    // Update the itemsInCartSubject to reflect the changes
    this.itemsInCartSubject.next(existingItems);
  }
}
