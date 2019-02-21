import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import {
  UserService,
  UserAdminService,
  TransactionService
} from '../../../../shared/services';
import { UserModel, Transaction } from '../../../../shared/models';

@Component({
  selector: 'app-cpaid',
  templateUrl: './cpaid.component.html',
  styleUrls: ['./cpaid.component.css']
})
export class CpaidComponent implements OnInit, OnDestroy {
  user: UserModel;
  transactions: Transaction[];
  userId = this.userService.getLoginId();

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['MM-dd-yyyy'];

  loadScripts() {
    const dynamicScripts = [
      '../../../../../assets/tables/jquery-3.3.1.js',
      '../../../../../assets/tables/widgets.js',
      '../../../../../assets/tables/jquery.dataTables.min.js',
      '../../../../../assets/tables/dataTables.buttons.min.js',
      '../../../../../assets/tables/buttons.flash.min.js',
      '../../../../../assets/tables/jszip.min.js',
      '../../../../../assets/tables/pdfmake.min.js',
      '../../../../../assets/tables/vfs_fonts.js',
      '../../../../../assets/tables/buttons.html5.min.js',
      '../../../../../assets/tables/buttons.print.min.js',
      '../../../../../assets/tables/buttons.colVis.min.js'
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
    private chRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loadScripts();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      dom: 'lBfrtip',
      buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
    };
        const transactionSub = this.transactionService
          .getCustomerPaid(this.userService.getLoginId())
          .subscribe(transactions => {
            this.transactions = transactions;
console.log('this.userId');
console.log(transactions);


            this.chRef.detectChanges();
            this.dtTrigger.next();

            transactionSub.unsubscribe();
          });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

}
}
