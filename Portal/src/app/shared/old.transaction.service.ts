// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/internal/operators';

// import { environment } from '../../environments/environment';
// import { Transaction } from './transaction.model';
// import { User } from './user.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TransactionService {
//   // selectedTransaction: Transaction = {
//   //   invoiceNumber:'',
//   //   salesOrder:'',
//   //   itemNumber:'',
//   //   itemDescription:'',
//   //   productLine:'',
//   //   unitPrice: null,
//   //   extAmount: null,
//   //   qtyOrdered: null,
//   //   qtyShipped: null,
//   //   status:'',
//   //   customerNo: null,
//   //   salespersonNo: null,
//   //   orderedDate: null,
//   //   shippedDate: null
//   // }

//   selectedTransaction = new Transaction();

//   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' })};

//   constructor(private http: HttpClient) { }

//   //HttpMethods

//   getTransactions() {
//     return this.http.get(environment.apiBaseUrl + '/transaction/', this.noAuthHeader).pipe(map((response: any) =>
//       response.map(transaction => new Transaction().deserialize(transaction)))
//     );
//   }

//   getTransaction(id): Observable<Transaction> {
//     return this.http.get(environment.apiBaseUrl + '/transaction/detail/' + id, this.noAuthHeader).pipe(map((response: any) => new Transaction().deserialize(response)));
//   }

//   deleteTransaction(id) {
//     return this.http.delete(environment.apiBaseUrl + '/transaction/' + id, this.noAuthHeader);
//   }

//   updateTransaction(id, transaction) {
//     console.log('service file');
//     return this.http.put(environment.apiBaseUrl + '/transaction/update/' +id , transaction, this.noAuthHeader);
//   }

//   addTransaction(transaction) {
//     return this.http.post(environment.apiBaseUrl + '/transaction/', transaction, this.noAuthHeader);
//   }




// }
