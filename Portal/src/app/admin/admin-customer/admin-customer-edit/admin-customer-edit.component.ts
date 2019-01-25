import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';

@Component({
  selector: 'app-admin-customer-edit',
  templateUrl: './admin-customer-edit.component.html',
  styleUrls: ['./admin-customer-edit.component.css']
})
export class AdminCustomerEditComponent implements OnInit {
  user: User;
  userID;

  constructor(private route: ActivatedRoute, private router: Router, private userAdminService: UserAdminService ) { 
    this.route.params.subscribe(params => {
      this.userID = params["id"];
    })
  }

  ngOnInit() {
    const userSub = this.userAdminService.getUser(this.userID).subscribe(user => {
      this.user = user;

      console.log(user);

      userSub.unsubscribe();
    })
  }

  onSubmit() {
    console.log(this.user);

    this.userAdminService.updateUser(this.user._id, this.user).subscribe(res => {
      console.log(res)

      this.router.navigateByUrl('admin');

    },
      err => {
        console.log(err);
      }
    );
  }

}
