import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
