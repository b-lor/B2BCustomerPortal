import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  userDetails;

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (
      this.userService.getRoleId() === 30 ||
      this.userService.getRoleId() === 99
    ) {
      return true;
    } else {
      console.log('manager only!');
      this.router.navigateByUrl('/error');

      return false;
    }
  }
}
