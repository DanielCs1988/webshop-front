import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AddressComponent} from './address/address.component';
import {PaymentComponent} from './payment/payment.component';
import {PaypalComponent} from './payment/paypal/paypal.component';
import {CreditCardComponent} from './payment/credit-card/credit-card.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'address', component: AddressComponent},
  {path: 'address/:checkout', component: AddressComponent},
  {path: 'payment', component: PaymentComponent, children: [
      {path: 'paypal', component: PaypalComponent},
      {path: 'credit-card', component: CreditCardComponent}
    ]},
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
