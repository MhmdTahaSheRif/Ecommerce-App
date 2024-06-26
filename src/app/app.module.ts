import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { environment } from "../environments/environment"
import { NgxStripeModule } from 'ngx-stripe';
import { SignupComponent } from './signup/signup.component';
import { HistoryComponent } from './history/history.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MensclothesComponent } from './mensclothes/mensclothes.component';
import { WomenclothesComponent } from './womenclothes/womenclothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ElectricaldevicesComponent } from './electricaldevices/electricaldevices.component';
import { ElectronicdevicesComponent } from './electronicdevices/electronicdevices.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    HomepageComponent,
    CardComponent,
    CartComponent,
    BannerComponent,
    PaymentformComponent,
    SignupComponent,
    HistoryComponent,
    ShowproductComponent,
    ProductDetailsComponent,
    NotfoundComponent,
    MensclothesComponent,
    WomenclothesComponent,
    AccessoriesComponent,
    ElectricaldevicesComponent,
    ElectronicdevicesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey),
    FormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
