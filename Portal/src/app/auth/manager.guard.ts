import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

    userDetails;

  constructor(private userService: UserService, private router: Router, private flashMessagesService: FlashMessagesService) {}

    canActivate() {
        if (this.userService.getRoleId() === 30) {
            return true;
        } else {
            // this.flashMessagesService.show('Manager only, not authorized', {
            //     cssClass: 'alert-danger',
            //     timeout: 3000
            // });
            console.log('manager only!');
            this.router.navigateByUrl('/error');

            return false;
        }
    }

}
