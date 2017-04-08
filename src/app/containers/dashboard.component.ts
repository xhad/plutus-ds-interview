import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { OrderActions } from '../order/order.actions';
import { Order } from '../order/order.model';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  form: FormGroup;

  order: Order;

  price$: Observable<number>;
  amount$: Observable<number>;
  type$: Observable<string>;
  side$: Observable<string>;
  order$: Observable<Order>;

  constructor(
    fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: OrderActions,
  ) {
    this.form = fb.group({
      name: ''
    });
    // this.order$ = this.store.select(state => state.pendingOrders);
    // this.user$.takeUntil(this.destroyed$)
    //   .subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    // this.form.get('name').setValue(this.user.name);
  }

  // clearName() {
  //   this.store.dispatch(this.userActions.editUser(
  //     Object.assign({}, this.user, { name: '' }
  //     )));

  //   this.form.get('name').setValue('');
  // }

  // logout() {
  //   this.store.dispatch(this.userActions.logout());
  // }

  // submitState() {
  //   this.store.dispatch(this.userActions.editUser(
  //     Object.assign({}, this.user, { name: this.form.get('name').value }
  //     )));
  // }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
