import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {UserService, TransactionService } from '../services';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionResolverService implements Resolve<any> {

  constructor(private router: Router, private userService: UserService, private transactionService: TransactionService) { }

resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
  console.log('loggin route param', route.params['name']);
  return this.transactionService.getCustomerPaid(this.userService.getLoginId);

}

}
