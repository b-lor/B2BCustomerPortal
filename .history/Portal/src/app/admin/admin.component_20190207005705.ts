import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  collapedSideBar: boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
