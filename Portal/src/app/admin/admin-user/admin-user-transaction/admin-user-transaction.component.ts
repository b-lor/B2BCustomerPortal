import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { UserAdminService } from '../../../shared/user-admin.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/user.model.admin';
import { Transaction } from '../../../shared/transaction.model';
import { TransactionService } from '../../../shared/transaction.service';


@Component({
  selector: 'app-admin-user-transaction',
  templateUrl: './admin-user-transaction.component.html',
  styleUrls: ['./admin-user-transaction.component.css']
})
export class AdminUserTransactionComponent implements OnInit {
  transaction: Transaction;
  transactionID;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private transactionService: TransactionService) { 
    this.route.params.subscribe(params => {
      console.log(params);
      this.transactionID = params["id"];
    })
  }

  ngOnInit() {

    const transactionSub = this.transactionService.getTransaction(this.transactionID).subscribe(transaction => {
      this.transaction = transaction;
      console.log('transaction');
      console.log(transaction);

      transactionSub.unsubscribe();
  });

}

onSubmit() {

  this.transactionService.updateTransaction(this.transactionID, this.transaction).subscribe(res => {
    console.log(res)
    this.router.navigateByUrl('admin/user');
  },
    err => {
      console.log(err);
    }
  );
}


}

