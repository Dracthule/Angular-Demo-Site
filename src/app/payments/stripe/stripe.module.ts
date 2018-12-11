import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeStripePaymentComponent } from '../../main/payments/make-stripe-payment/make-stripe-payment.component';

@NgModule({
  declarations: [MakeStripePaymentComponent],
  imports: [
    CommonModule
  ]
})
export class StripeModule { }
