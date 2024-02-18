import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { SignupComponent } from './signup/signup.component';
import { HistoryComponent } from './history/history.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WomenclothesComponent } from './womenclothes/womenclothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ElectricaldevicesComponent } from './electricaldevices/electricaldevices.component';
import { ElectronicdevicesComponent } from './electronicdevices/electronicdevices.component';
import { MensclothesComponent } from './mensclothes/mensclothes.component';
const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'cart',component:CartComponent},
    {path:'signin',component:SignInComponent},
    {path:'signup',component:SignupComponent},
    {path:'checkout',component:PaymentformComponent},
    {path:'history',component:HistoryComponent},
    {path:'show product',component:ShowproductComponent},
    {path:'Mens Clothes',component:MensclothesComponent},
    {path:'women Clothes',component:WomenclothesComponent},
    {path:'Accessories',component:AccessoriesComponent},
    {path:'Electrical Devices',component:ElectricaldevicesComponent},
    {path:'Electronic Device',component:ElectronicdevicesComponent},
    { path: 'item-details/:id', component: ProductDetailsComponent },

{path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
