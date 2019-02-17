import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  userDetails;

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (
      this.userService.getRoleId() === 20 ||
      this.userService.getRoleId() === 30 ||
      this.userService.getRoleId() === 99
    ) {
      return true;
    } else {
      console.log('employee only!');
      this.router.navigateByUrl('/error');

      return false;
    }
  }
}
