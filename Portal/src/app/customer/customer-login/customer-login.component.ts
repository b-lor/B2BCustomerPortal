import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model.admin';
import { UserAdminService } from '../../shared/user-admin.service';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  user: User;
  userID;
  constructor(private userAdminService: UserAdminService, private userService: UserService, private router: Router) { }

  ngOnInit() {

    const userSub = this.userAdminService.getUser(this.userService.getLoginId()).subscribe(user => {
      this.user = user;
      // console.log('selected user');
      // console.log(user);

      userSub.unsubscribe();

    });
  }

  onSubmit() {
    this.userAdminService.updateUser(this.userService.getLoginId(), this.user).subscribe(res => {
      console.log(res);

      this.router.navigateByUrl('customer');

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
