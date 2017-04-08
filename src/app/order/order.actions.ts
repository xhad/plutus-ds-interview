/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Order } from './order.model';

@Injectable()
export class OrderActions {

  static BUY_ORDER = '[Order] Buy';
  buyOrder(order: Order): Action {
    return {
      type: OrderActions.BUY_ORDER,
      payload: order
    }
  }

  static SELL_ORDER = '[Order] Sell';
  sellOrder(order: Order): Action {
    return {
      type: OrderActions.SELL_ORDER,
      payload: order
    }
  }

  static PENDING_ORDER = '[Order] Pending';
  pendingOrder(order: Order): Action {
    return {
      type: OrderActions.PENDING_ORDER,
      payload: order
    }
  }

  static ORDER_FILLED_SUCCESS = '[Order] Filled';
  filledOrder(order: Order): Action {
    return {
      type: OrderActions.ORDER_FILLED_SUCCESS,
      payload: order
    }
  }

  static ORDER_FAILED = '[Order] Failed';
  failedOrder(response: Order): Action {
    return {
      type: OrderActions.ORDER_FAILED,
      payload: response
    }
  }

  static CANCEL_ORDER = '[Order] Cancel';
  cancelOrder(id: string): Action {
    return {
      type: OrderActions.CANCEL_ORDER,
      payload: id
    }
  }
  
  static CANCEL_ORDER_SUCCESS = '[Order] Cancel Success';
  cancelOrderSuccess(id: string): Action {
    return {
      type: OrderActions.CANCEL_ORDER_SUCCESS,
      payload: id
    }
  }
}

