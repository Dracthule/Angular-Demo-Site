
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from ' r'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StripeService {

  userId: string;

  constructor (private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid
    });
  }


  processPayment(token: any, amount: number) {
    const payment = { token, amount }
    return this.db.list
