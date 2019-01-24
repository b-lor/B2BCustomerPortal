import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {

    userDetails;

  constructor(private userService: UserService, private router: Router, private flashMessagesService: FlashMessagesService) {}

    canActivate() {
        if (this.userService.getRoleId() === 20 || this.userService.getRoleId() === 30 || this.userService.getRoleId() === 99) {
            return true;
        } else {
            // this.flashMessagesService.show('Employee only, not authorized', {
            //     cssClass: 'alert-danger',
            //     timeout: 3000
            // });
            console.log('employee only!');
            this.router.navigateByUrl('/error');

            return false;
        }
    }

}
