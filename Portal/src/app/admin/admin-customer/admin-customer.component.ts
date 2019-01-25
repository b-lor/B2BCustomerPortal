import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { UserAdminService } from '../../shared/user-admin.service';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-admin-customer, json-pipe',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
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


  // ngOnInit() {
  //   const userSub = this.userAdminService.getUsers().subscribe(users => {
  //     this.users = users;
  //     var userd = JSON.stringify(users);
  //     JSON.parse(userd);
  //     userSub.unsubscribe();
  //     console.log('customers page, oninit');
  //     console.log('users');
  // })

  
//   this.userAdminService.getUsers().subscribe(
//     res => {
// this.userDetails = res['user'];
//     },
//     err => {

//     }
//   );

}

