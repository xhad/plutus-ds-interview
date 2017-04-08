import { Component, Input, Output, OnChanges ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Order } from '../../order/order.model';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
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

  constructor(private formBuilder: FormBuilder) {
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
}