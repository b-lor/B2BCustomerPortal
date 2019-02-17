import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userDetails;

  constructor(private userService: UserService, private router: Router) { }

  model = {
    email: '',
    password: ''
  };

  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {

      }
    );
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {

        this.userService.setToken(res['token']);

        if (this.userService.getRoleId() === 20) {
          this.router.navigateByUrl('/employee/dashboard');

        } else if (this.userService.getRoleId() === 30) {
          this.router.navigateByUrl('/manager/dashboard');

        } else if (this.userService.getRoleId() === 99) {
          this.router.navigateByUrl('/admin/dashboard');

        } else {
          this.router.navigateByUrl('/customer/dashboard');
          return;
        }

      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
