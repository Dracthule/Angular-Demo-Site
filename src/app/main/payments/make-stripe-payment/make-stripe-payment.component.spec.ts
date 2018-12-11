import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeStripePaymentComponent } from './make-stripe-payment.component';

describe('MakeStripePaymentComponent', () => {
  let component: MakeStripePaymentComponent;
  let fixture: ComponentFixture<MakeStripePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeStripePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeStripePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
