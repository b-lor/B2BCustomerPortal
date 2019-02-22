import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserModel } from '../../../shared/models';
import { UserAdminService, UserService } from '../../../shared/services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: UserModel;
  userID;
  userDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userAdminService: UserAdminService,
    private userService: UserService
  ) {
    this.route.params.subscribe(params => {
      this.userID = params['id'];
    });
  }

  ngOnInit() {
    const userSub = this.userAdminService
      .getUser(this.userID)
      .subscribe(user => {
        this.user = user;
        userSub.unsubscribe();

        this.userService.getUserProfile().subscribe(
          res => {
            this.userDetails = res['user'];
      });
  });
}

  onSubmit() {
    console.log(this.user);

    this.userAdminService.updateUser(this.user._id, this.user).subscribe(
      res => {
        console.log(res);

        this.router.navigateByUrl('admin');
      },
      err => {
        console.log(err);
      }
    );
  }
}
