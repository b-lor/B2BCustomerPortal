// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';

// import { User } from '../../../shared/user.model.admin';
// import { UserAdminService } from '../../../shared/user-admin.service';

// @Component({
//   selector: 'app-admin-user-detail',
//   templateUrl: './admin-user-detail.component.html',
//   styleUrls: ['./admin-user-detail.component.css']
// })
// export class AdminUserDetailComponent implements OnInit {
//   user: User;
//   userID;

//   constructor(private route: ActivatedRoute, private router: Router, private userAdminService: UserAdminService) { 
//     this.route.params.subscribe(params => {
//       this.userID = params['id'];
//     });
//   }

  

//   ngOnInit() {
//     const userSub = this.userAdminService.getUser(this.userID).subscribe(user => {
//       this.user = user;

//       console.log(user);

//       userSub.unsubscribe();
//     })
//   }

// }