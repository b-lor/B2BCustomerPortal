import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sales, Globals } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  globals: Globals;
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private userData(res: Response) {
    const body = res;
    return body || {};
  }

  // HttpMethods

  // sales per day by customer
  getInvoicesPerCustomer() {
    return this.http
      .get(environment.apiBaseUrl + '/sales/invoices/customer', this.noAuthHeader)
      .pipe(map((response: any) =>
          response.map(sales =>
            new Sales().deserialize(sales)
          )
        )
      );
  }

  // sales per day by all customers
  getInvoices() {
    return this.http
      .get(environment.apiBaseUrl + '/sales/invoices/', this.noAuthHeader)
      .pipe(map((response: any) =>
          response.map(sales =>
            new Sales().deserialize(sales)
          )
        )
      );
  }

  // orders per day by customer
  getOrdersPerCustomer() {
    return this.http
      .get(environment.apiBaseUrl + '/sales/orders/customer', this.noAuthHeader)
      .pipe(map((response: any) =>
          response.map(sales =>
            new Sales().deserialize(sales)
          )
        )
      );
  }

  // orders per day by all customers
  getOrders() {
    return this.http
      .get(environment.apiBaseUrl + '/sales/orders/', this.noAuthHeader)
      .pipe(map((response: any) =>
          response.map(sales =>
            new Sales().deserialize(sales)
          )
        )
      );
  }







  getOpenOrders(id) {
    return this.http
      .get(environment.apiBaseUrl + '/sales/' + id, this.noAuthHeader)
      .pipe(map((response: any) =>
          response.map(sales =>
            new Sales().deserialize(sales)
          )
        )
      );
  }


////
}
