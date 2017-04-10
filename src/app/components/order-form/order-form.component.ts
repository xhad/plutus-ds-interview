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

  order: FormGroup;
  currency = 'KRW';
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

  buy(order: Order) {
   this.store.dispatch(this.orderActions.buyOrder(order));
  }

  sell(order: Order) {
      this.store.dispatch(this.orderActions.sellOrder(order));
  }

  placeOrder(type, order) {
    order.side = type;
    order.id = v1();
    switch(type) {
      case 'BUY':
        this.buy(order);
      case 'SELL':
        this.sell(order);
    }
  }
}