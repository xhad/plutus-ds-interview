export interface Order {

  readonly tradeId: string,
  readonly date: string,
  readonly side: string,
  readonly amount: number, 
  readonly price: number,
  readonly type: string,
  readonly status: 'PENDING' | 'FILLED' | 'CANCELED' | 'FAILED';
}
