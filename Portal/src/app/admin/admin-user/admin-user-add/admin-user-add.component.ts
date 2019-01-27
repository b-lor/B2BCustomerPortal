import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {
  user = new User();

  constructor(private route: ActivatedRoute, private router: Router, private userAdminService: UserAdminService) { }

  ngOnInit() {
  }

  onSubmit() {

  this.userAdminService.addUser(this.user).subscribe(res => {
    console.log(res)

    this.router.navigateByUrl('admin');

  },
    err => {
      console.log(err);
    }
  );
}
}
