import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product';
import {  GlobalstateService } from '../globalstate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  constructor(private globalState: GlobalstateService, private router: Router) { } // Inject the Router
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
      }
      else{
        this.items=this.globalState.getProducts()
        this.searchedItem=''
      }

    },err => {
      console.log(err)
    })
  }


goToItemDetails(itemId: number): void {
  this.router.navigate(['/item-details', itemId]); }

  showProductDetails(itemId: number): void {
    this.router.navigate(['/item-details', itemId]);
  }
}
