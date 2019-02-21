import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { UserService, TransactionService } from '../../../../shared/services';
import { UserModel, Transaction } from '../../../../shared/models';

@Component({
  selector: 'app-csales',
  templateUrl: './csales.component.html',
  styleUrls: ['./csales.component.css']
})
export class CsalesComponent implements OnInit, OnDestroy {
  user: UserModel;
  transactions: Transaction[];
  userId = this.userService.getLoginId();

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  dataTable: any;

  formatsDate: string[] = ['MM-dd-yyyy'];

  constructor(
    private userService: UserService,
    private transactionService: TransactionService,
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      dom: 'lBfrtip',
      buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
    };
    const transactionSub = this.transactionService
      .getOpenOrders(this.userService.getLoginId())
      .subscribe(transactions => {
        this.transactions = transactions;
        this.chRef.detectChanges();
        this.dtTrigger.next();

        transactionSub.unsubscribe();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
