import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Transaction } from '../../../shared/models';
import { UserService, TransactionService } from '../../../shared/services';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {
  transaction: Transaction;
  transactionID;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.transactionID = params['id'];
    });
  }

  ngOnInit() {
    const transactionSub = this.transactionService
      .getTransaction(this.transactionID)
      .subscribe(transaction => {
        this.transaction = transaction;
        console.log('transaction');
        console.log(transaction);

        transactionSub.unsubscribe();
      });
  }

  onSubmit() {
    this.transactionService
      .updateTransaction(this.transactionID, this.transaction)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('admin/user');
        },
        err => {
          console.log(err);
        }
      );
  }
}
