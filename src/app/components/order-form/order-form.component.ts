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
  types: Object = [
    {value: 'LIMIT', viewValue: 'Limit Order'},
    {value: 'MARKET', viewValue: 'Market Order'}
  ];

  selectedValue: string = this.types[0].value;
  errorMessage: string = '';

  constructor(
      private store: Store<AppState>,
      private orderActions: OrderActions,
      private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
   this.order = this.formBuilder.group({
      type: ['LIMIT'],
      side: [''],
      price: [0, Validators.required],
      amount: [0, Validators.required]
    })
  }

  buy(order: Order) {
   this.store.dispatch(this.orderActions.buyOrder(order));
  }

  sell(order: Order) {
      this.store.dispatch(this.orderActions.sellOrder(order));
  }

  placeOrder(side, order) {
    // add side and timebased random unique identifier id
    let d = new Date();
    let newOrder = Object.assign({}, order, {
      timestamp: d.getTime(), 
      side: side, 
      tradeId: v1()
    }); 

    switch(side) {
      case 'BUY':
        return this.buy(newOrder);
      case 'SELL':
        return this.sell(newOrder);
    }
  }
}