import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { CartComponent } from './component/cart/cart.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';
import { OrdersummaryComponent } from './component/ordersummary/ordersummary.component';
import {RegisterComponent} from  './component/register/register.component';


const routes: Routes = [
{path:"",redirectTo:"/login",pathMatch:"full"},
{path:"book",component:BookComponent},
 {path:"details",component:BookdetailsComponent},
 {path:"details/:token",component:BookdetailsComponent},
 {path:"cart",component:CartComponent},
 {path:"cart/:id",component:CartComponent},
 {path:"cart/:token",component:CartComponent},
 {path:"customer",component:CustomerComponent},
 {path:"login",component:LoginComponent},
 {path:"ordersummary",component:OrdersummaryComponent},
 {path:"order",component:OrderComponent},
 {path:"register",component:RegisterComponent},
 {path:"changepassword",component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
