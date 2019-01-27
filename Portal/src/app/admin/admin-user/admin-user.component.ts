import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { UserAdminService } from '../../shared/user-admin.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  // users: User[];
  userInfo: any;

  constructor(private router: Router, private userAdminService: UserAdminService) { }

  ngOnInit() {
    this.userAdminService.getUsers()
    .subscribe( res=> {
  this.userInfo = res;
      }, err=> {
        console.log(err);
      }
    );
  }

  deleteUser(id) {
    console.log('del clicked' + id);

    this.userAdminService.deleteUser(id).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('admin');
    },
      err => {
        console.log(err);
        this.router.navigateByUrl('admin');
      }
    );

}
}
