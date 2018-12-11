import { environment } from './../../../../environments/environment';
import { StripeService } from './../stripe.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-make-stripe-payment',
  templateUrl: './make-stripe-payment.component.html',
  styleUrls: ['./make-stripe-payment.component.css']
})
export class MakeStripePaymentComponent implements OnInit {
  handler: any;
  amount = 40000;

  constructor(private stripeSvc: StripeService) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '/src/assets/logo-FULL.png',
      locale: 'auto',
      token: token => {
        this.stripeSvc.processPayment(token, this.amount)
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: 'DCinsites',
      excerpt: 'Pay Invoice',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close()
  }

}
