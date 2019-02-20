import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Transaction } from '../../../../shared/models';
import { TransactionService } from '../../../../shared/services';

@Component({
  selector: 'app-cdetail',
  templateUrl: './cdetail.component.html',
  styleUrls: ['./cdetail.component.css']
})
export class CdetailComponent implements OnInit {
  transaction: Transaction;
  transactionID: string;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.transactionID = params['id'];
      console.log('component2');
      console.log(this.transactionID);
    });
  }

  ngOnInit() {
    const transactionSub = this.transactionService.getTransaction(this.transactionID).subscribe(transaction => {
      this.transaction = transaction;
      console.log('component');
      console.log(transaction);
      transactionSub.unsubscribe();
    });
  }
  }