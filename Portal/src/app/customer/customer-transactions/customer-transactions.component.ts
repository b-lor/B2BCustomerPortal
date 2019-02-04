
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { UserAdminService } from '../../shared/user-admin.service';

import { User } from '../../shared/user.model.admin';
import { Transaction } from '../../shared/transaction.model';
import { TransactionService } from '../../shared/transaction.service';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.css']
})
export class CustomerTransactionsComponent implements OnInit {
  user: User;
  transactions: Transaction[];
  userID;
  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private transactionService: TransactionService, private userAdminService: UserAdminService) {


  }

  ngOnInit() {

    const userSub = this.userAdminService.getUser(this.userService.getLoginId()).subscribe(user => {
      this.user = user;
      // console.log('selected user');
      // console.log(user);


      const transactionSub = this.transactionService.getCustomerTransaction(this.user._id).subscribe(transactions => {
        this.transactions = transactions;
        // console.log('transactions');
        // console.log(transactions);

        transactionSub.unsubscribe();
      });

      userSub.unsubscribe();

    });
  }

}
