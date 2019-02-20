import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import {
  UserService,
  UserAdminService,
  TransactionService
} from '../../../shared/services';
import { UserModel, Transaction } from '../../../shared/models';

@Component({
  selector: 'app-c-transactions',
  templateUrl: './c-transactions.component.html',
  styleUrls: ['./c-transactions.component.css']
})
export class CTransactionsComponent implements OnInit, OnDestroy {
  user: UserModel;
  transactions: Transaction[];
  userID;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['MM-dd-yyyy'];

  loadScripts() {
    const dynamicScripts = [
      'https://code.jquery.com/jquery-3.3.1.js',
      'https://platform.twitter.com/widgets.js',
      'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js',
      'https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js',
      'https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js',
      'https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js',
      'https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js',
      'https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js',
      'https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor(
    private userService: UserService,
    private transactionService: TransactionService,
    private userAdminService: UserAdminService,
    private chRef: ChangeDetectorRef
  ) {
    this.loadScripts();
  }

  ngOnInit(): void {
    const userSub = this.userAdminService
      .getUser(this.userService.getLoginId())
      .subscribe(user => {
        this.user = user;

        this.dtOptions = {
          pagingType: 'full_numbers',
          destroy: true,
          serverSide: false,
          pageLength: 25,
          processing: true,
          dom: 'lBfrtip',
          buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
        };
        const transactionSub = this.transactionService
          .getCustomerTransaction(this.user._id)
          .subscribe(transactions => {
            this.transactions = transactions;
            transactionSub.unsubscribe();
          });

          this.chRef.detectChanges();
          this.dtTrigger.next();
        userSub.unsubscribe();
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

}
}
