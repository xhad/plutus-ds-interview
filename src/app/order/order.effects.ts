/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderActions } from './order.actions';
import { AppState } from '../reducers';
import { OrderService } from './order.service';

@Injectable()

export class OrderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private orderService: OrderService,
    private orderActions: OrderActions
  ) { }

  @Effect() buy$ = this.actions$
    .ofType(OrderActions.BUY_ORDER)
    .map(action => action.payload)
    .switchMap(() => this.orderService.buy()
    // order service returns a status message and order id
      .mergeMap((id: any) => Observable.of(
        this.orderActions.pendingOrder(id)
        )
      )
      .catch((err) => Observable.of(
        // returns a status message, order id and reason
        this.orderActions.failedOrder(err)
      ))
    );
}
