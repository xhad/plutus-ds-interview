import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class OrderService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getAll(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/orders/get-all`, this.optionsNoPre)
      .map(res => res.text());    
  }

  buy(): Observable<string> {
    return this.http.post(`${API_BASE_URL}/orders/buy`, this.optionsNoPre)
      .map(res => res.text());
  }

  sell(): Observable<string> {
    return this.http.post(`${API_BASE_URL}/orders/sell`, this.optionsNoPre)
      .map(res => res.text());
  }

  cancel(): Observable<string> {
    return this.http.post(`${API_BASE_URL}/orders/cancel`, this.optionsNoPre)
      .map(res => res.text());
  }
}
