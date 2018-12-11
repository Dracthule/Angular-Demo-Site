import { MakeStripePaymentComponent } from './main/payments/make-stripe-payment/make-stripe-payment.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'payments',
    component: MakeStripePaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
