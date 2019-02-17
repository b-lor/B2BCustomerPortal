import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userDetails;

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (this.userService.getRoleId() === 99) {
      return true;
    } else {
      console.log('admin only!');
      this.router.navigateByUrl('/error');

      return false;
    }
  }
}
