import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';
import { ProfileService } from '../../../shared/profile.service';
import { Profile } from '../../../shared/profile.model';

@Component({
  selector: 'app-admin-profile-edit',
  templateUrl: './admin-profile-edit.component.html',
  styleUrls: ['./admin-profile-edit.component.css']
})
export class AdminProfileEditComponent implements OnInit {
  profile: Profile;

  constructor(private userService: UserService, private router: Router, private profileService: ProfileService) { }

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

        this.router.navigateByUrl('admin/profile');

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
