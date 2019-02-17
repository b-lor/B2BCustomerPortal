import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, UserAdminService } from '../../shared/services';
import { User } from '../../shared/models';

@Component({
  selector: 'app-change-login',
  templateUrl: './change-login.component.html',
  styleUrls: ['./change-login.component.css']
})
export class ChangeLoginComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private userAdminService: UserAdminService,
    private router: Router
  ) {}

  ngOnInit() {
    const userSub = this.userAdminService
      .getUser(this.userService.getLoginId())
      .subscribe(user => {
        this.user = user;
        userSub.unsubscribe();
      });
  }
  onSubmit() {
    this.userAdminService
      .updateUser(this.userService.getLoginId(), this.user)
      .subscribe(
        res => {
          this.router.navigateByUrl('dashboard');
        },
        err => {
          console.log(err);
        }
      );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
