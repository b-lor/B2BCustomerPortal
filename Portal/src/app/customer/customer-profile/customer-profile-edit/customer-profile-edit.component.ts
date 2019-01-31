import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';
import { ProfileService } from '../../../shared/profile.service';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.css']
})
export class CustomerProfileEditComponent implements OnInit {
  user: User;
  userID;
  userDetails;

  constructor(private userService: UserService,private route: ActivatedRoute, private router: Router, private profileService: ProfileService, private userAdminService: UserAdminService) {
    this.route.params.subscribe(params => {
      this.userID = params['id'];
      console.log('this.userID');
      console.log(this.userID);
    });
   }

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
    // const userSub = this.profileService.getProfile(this.userID).subscribe(user => {
    //   this.user = user;
    //   console.log('user');
    //   console.log(user);

    //   userSub.unsubscribe();
    // })
  }

  onSubmit() {
    console.log('this.user');
    console.log(this.user);

    // this.profileService.updateProfile(this.user._id, this.user).subscribe(res => {
    //   console.log('res')
    //   console.log(res)
      this.router.navigateByUrl('customer');

    // },
    //   err => {
    //     console.log('err')
    //     console.log(err);
    //   }
    // );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
