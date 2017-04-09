/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { OrderActions } from './order.actions';
import { Order } from './order.model';

export interface OrderState {
  pendingOrders: Array<Order>,
  filledOrders: Array<Order>
};

export const initialState: OrderState = {
  pendingOrders: [],
  filledOrders: []
};

export function orderReducer(state = initialState, action: Action): OrderState {
  switch (action.type) {

    case OrderActions.BUY_ORDER: {
      return Object.assign({}, state, {
        pendingOrders: [...state.pendingOrders, action.payload]
      })
    }

    case OrderActions.SELL_ORDER: {
      return Object.assign(state, {
        pendingOrders: [...state.pendingOrders, action.payload ]
      });
    }

    default: {
      return state;
    }
  }
}

