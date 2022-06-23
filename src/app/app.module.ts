import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookheaderComponent } from './component/bookheader/bookheader.component';
import { BookComponent } from './component/book/book.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { CartComponent } from './component/cart/cart.component';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersummaryComponent } from './component/ordersummary/ordersummary.component';
import { OrderComponent } from './component/order/order.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { FooterComponent } from './component/footer/footer.component';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    BookheaderComponent,
    BookComponent,
    BookdetailsComponent,
    CartComponent,
    CustomerComponent,
    LoginComponent,
    OrdersummaryComponent,
    OrderComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
