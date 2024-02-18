import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product';
import { GlobalstateService } from '../globalstate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womenclothes',
  templateUrl: './womenclothes.component.html',
  styleUrls: ['./womenclothes.component.css']
})

export class WomenclothesComponent  implements OnInit {

  constructor(private globalState: GlobalstateService, private router: Router) { }
  items: Product[] | undefined

  searchedItem: string=''

  cart: Product[] =[]

  ngOnInit(): void {

    this.globalState.productsSubscription.subscribe(res => {
      this.items = res
    }, err => {
      console.log(err)
    })

    this.globalState.searchedItemSubscription.subscribe((res)=>{

      if(res!="")
      {

        this.items=this.globalState.getSearchedItemsResult(res)
        this.searchedItem=res
   } })}


goToItemDetails(itemId: number): void {
  this.router.navigate(['/item-details', itemId]); }

  showProductDetails(itemId: number, item: Product): void {
    let existingItems: Product[] = JSON.parse(localStorage.getItem('selectedItems') || '[]');
    existingItems.push(item);
    localStorage.setItem('selectedItems', JSON.stringify(existingItems));
    localStorage.setItem('selectedItem', JSON.stringify(item));
    this.router.navigate(['/item-details', itemId]);
  }

}
