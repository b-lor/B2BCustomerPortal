// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from '../../shared/user.model.admin';
// import { UserAdminService } from '../../shared/user-admin.service';

// @Component({
//   selector: 'app-admin-customer',
//   templateUrl: './admin-customer.component.html',
//   styleUrls: ['./admin-customer.component.css']
// })
// export class AdminCustomerComponent implements OnInit {
//   users: User[];
//   // userDetails;

//   constructor(private router: Router, private userAdminService: UserAdminService) { }

//   ngOnInit() {
//     const userSub = this.userAdminService.getUsers().subscribe(users => {
//       this.users = users;
//       userSub.unsubscribe();
//       console.log('customers page, oninit');
//       console.log(users);
//   })

// //   this.userAdminService.getUsers().subscribe(
// //     res => {
// // this.userDetails = res['user'];
// //     },
// //     err => {

// //     }
// //   );

// }
// }


