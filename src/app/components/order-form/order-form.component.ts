import { Component, Input, Output, OnChanges ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { Order } from '../../order/order.model';
import { OrderActions } from '../../order/order.actions';
import { v1 } from 'uuid';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['order-form.component.css']
})

export class OrderFormComponent {

  @Output() placeOrder = new EventEmitter();
  
  order: FormGroup;
  currency = 'USD';
  orderTypes: [
    {value: 'MARKET', viewValue: 'Market Order'},
    {value: 'LIMIT', viewValue: 'Limit Order'}

  ];
  errorMessage = '';

  constructor(
      private store: Store<AppState>,
      private orderActions: OrderActions,
      private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
   this.order = this.formBuilder.group({
      type: [''],
      side: [''],
      price: [''],
      amount: ['']
    })
  }

  buy(order) {
   this.store.dispatch(this.orderActions.buyOrder(order));
  }

  orderId(order, callback) {
    order.id = v1();
    console.log(v1());
  }

  sell(order) {
    this.store.dispatch(this.orderActions.sellOrder(order));
  }
}