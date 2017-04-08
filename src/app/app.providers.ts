import { OrderActions } from './order/order.actions';
import { OrderService } from './order/order.service';

export const APP_PROVIDERS = [
  OrderActions,
  OrderService
];
