import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


import { UserService, ValidateService } from '../../shared/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService, private validateService: ValidateService, private flashMessage: NgFlashMessageService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const user = {
      email: form.value.email,
      username: form.value.username,
      password: form.value.password,
      password2: form.value.password2
    };

    if (!this.validateService.validateName(user.name)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Name!'],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Email Id!'],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });
      return false;
    }

    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessage.showFlashMessage({
        messages: ['Invalid Username!'],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });
      return false;
    }

    if (!this.validateService.validatePassword(user.password, user.password2)) {
      this.flashMessage.showFlashMessage({
        messages: ['Password not matched!'],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });
      return false;
    }

        this.userService.postUser(form.value).subscribe(res => {
          if (res) {
            this.flashMessage.showFlashMessage({
              messages: ['Your account successfully created, Let\'s get logged in!'],
              dismissible: true,
              timeout: 4000,
              type: 'success'
            });
            this.router.navigate(['login']);
            form.resetForm();
            return true;
          } else {
            this.flashMessage.showFlashMessage({
              messages: ['Something went wrong!'],
              dismissible: true,
              timeout: 4000,
              type: 'danger'
            });
            this.router.navigate(['dashboard']);
            return false;
          }
        });


  // onSubmit(form: NgForm) {
  //   this.userService.postUser(form.value).subscribe(
  //     res => {
  //       this.showSuccessMessage = true;
  //       setTimeout(() => (this.showSuccessMessage = false), 4000);
  //       this.resetForm(form);
  //     },
  //     err => {
  //       if (err.status === 422) {
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       } else {
  //         this.serverErrorMessages =
  //           'Something went wrong. Please contact the Admin.';
  //       }
  //     }
  //   );
  // }

  // resetForm(form: NgForm) {
  //   this.userService.selectedUser = {
  //     _id: '',
  //     email: '',
  //     password: ''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }






}

}
