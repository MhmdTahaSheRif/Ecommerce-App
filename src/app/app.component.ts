import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { GlobalstateService } from './globalstate.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  constructor(private global: GlobalstateService, private productservice: ProductsService, private auth: AuthService) {
    productservice.getProductData().subscribe((res) => {
      this.global.updateProducts(res)
    }, (e) => {
      console.log(e)
    })

    if(localStorage.getItem('token')) {this.auth.getCurrentUser().subscribe((res) => {this.global.updateCurrentUser(res)})}
  }
}
