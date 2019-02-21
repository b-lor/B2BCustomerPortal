import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Transaction, Globals } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
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

  getTransactions() {
    return this.http
      .get(environment.apiBaseUrl + '/transaction/', this.noAuthHeader)
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  getTransaction(id): Observable<any> {
    return this.http
      .get(environment.apiBaseUrl + '/transaction/' + id, httpOptions)
      .pipe(
        map(this.userData),
        catchError(this.handleError)
      );
  }

  deleteTransaction(id) {
    return this.http.delete(
      environment.apiBaseUrl + '/transaction/' + id,
      this.noAuthHeader
    );
  }

  updateTransaction(id, transaction) {
    return this.http.put(
      environment.apiBaseUrl + '/transaction/' + id,
      transaction,
      this.noAuthHeader
    );
  }

  addTransaction(transaction) {
    return this.http.post(
      environment.apiBaseUrl + '/transaction/',
      transaction,
      this.noAuthHeader
    );
  }

  getCustomerTransaction(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  getOpenOrders(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/open/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  getCustomerPaid(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/paid/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  // getCustomerPaid(id) {
  //   return this.http
  //     .get(
  //       environment.apiBaseUrl + '/transaction/customer/paid/' + id,
  //       this.noAuthHeader
  //     )
  //     .pipe(
  //       map((response: any) =>
  //         response.map(transaction =>
  //           new Transaction().deserialize(transaction)
  //         )
  //       )
  //     );
  // }


  getCustomerUnpaid(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/unpaid/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  /////// test below

  getCustomerInvBalance(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/invoice-balance/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }

  getCustomerSalesAmount(id) {
    return this.http
      .get(
        environment.apiBaseUrl + '/transaction/customer/open-sales/' + id,
        this.noAuthHeader
      )
      .pipe(
        map((response: any) =>
          response.map(transaction =>
            new Transaction().deserialize(transaction)
          )
        )
      );
  }
}
