import { environment } from './../../../../environments/environment.prod';
import { StripeService } from './../stripe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-stripe-payment',
  templateUrl: './make-stripe-payment.component.html',
  styleUrls: ['./make-stripe-payment.component.css']
})
export class MakeStripePaymentComponent implements OnInit {
  handler: any;
  amount = 500;

  constructor(private stripeSvc: StripeService) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '',
    })
  }

}
