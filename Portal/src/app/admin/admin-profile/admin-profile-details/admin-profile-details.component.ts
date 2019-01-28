import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-profile-details',
  templateUrl: './admin-profile-details.component.html',
  styleUrls: ['./admin-profile-details.component.css']
})
export class AdminProfileDetailsComponent implements OnInit {
userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
  this.userDetails = res['user'];
      },
      err => {

      }
    );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
