import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../shared/models';
import { UserAdminService } from '../../../shared/services';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user = new UserModel();

  constructor(
    private router: Router,
    private userAdminService: UserAdminService
  ) {}

  ngOnInit() {}
  onSubmit() {
    this.userAdminService.addUser(this.user).subscribe(
      res => {
        console.log(res);

        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
      }
    );
  }
}
