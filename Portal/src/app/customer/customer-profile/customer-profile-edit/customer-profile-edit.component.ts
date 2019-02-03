import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';
import { ProfileService } from '../../../shared/profile.service';
import { Profile } from '../../../shared/profile.model';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.css']
})
export class CustomerProfileEditComponent implements OnInit {
  // user: User;
  // userID;
  // userDetails;
  profile: Profile;

  constructor(private userService: UserService, private router: Router, private profileService: ProfileService) {

   }

  ngOnInit() {
  const userSub = this.profileService.getProfile(this.userService.getProfileId()).subscribe(profile => {
    this.profile = profile;
    // console.log('selected user');
    // console.log(user);

    userSub.unsubscribe();

  });
  }

  onSubmit() {
    this.profileService.updateProfile(this.userService.getProfileId(), this.profile).subscribe(res => {
      console.log(res);

      this.router.navigateByUrl('customer/profile');

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
