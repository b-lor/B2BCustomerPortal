import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  userDetails;

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (
      this.userService.getRoleId() === 10
    ) {
      return true;
    } else {
      this.router.navigateByUrl('/error');

      return false;
    }
  }
}
