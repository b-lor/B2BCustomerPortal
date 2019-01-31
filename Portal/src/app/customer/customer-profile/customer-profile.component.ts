import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { UserAdminService } from '../../shared/user-admin.service';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  userDetails;

  constructor(private userService: UserService, private router: Router, private userAdminService: UserAdminService, private profileService: ProfileService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
  this.userDetails = res['user'];
  console.log('this.userDetails');
  console.log(this.userDetails);
      },
      err => {

      }
    );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
