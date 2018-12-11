
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeService } from './../stripe.service';
import { MakeStripePaymentComponent } from './../make-stripe-payment/make-stripe-payment.component';


@NgModule({
  declarations: [
    MakeStripePaymentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StripeService
  ]
})
export class StripeModule { }
