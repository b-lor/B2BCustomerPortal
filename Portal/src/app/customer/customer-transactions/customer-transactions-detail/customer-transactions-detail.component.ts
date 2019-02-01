import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../../shared/transaction.model';
import { TransactionService } from '../../../shared/transaction.service';

@Component({
  selector: 'app-customer-transactions-detail',
  templateUrl: './customer-transactions-detail.component.html',
  styleUrls: ['./customer-transactions-detail.component.css']
})
export class CustomerTransactionsDetailComponent implements OnInit {
  transaction: Transaction;
  transactionID: string;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.transactionID = params["id"];
      console.log('component2');
      console.log(this.transactionID);
    })
  }

  ngOnInit() {
    const transactionSub = this.transactionService.getTransaction(this.transactionID).subscribe(transaction => {
      this.transaction = transaction;
      console.log('component');
      console.log(transaction);
      transactionSub.unsubscribe();
    })
  }
  }


