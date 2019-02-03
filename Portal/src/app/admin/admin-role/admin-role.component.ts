import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../../shared/role.model';
import { RoleService } from '../../shared/role.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.css']
})
export class AdminRoleComponent implements OnInit {
roleInfo: any;

  constructor(private router: Router, private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getRoles()
    .subscribe( res => {
  this.roleInfo = res;
      }, err => {
        console.log(err);
      }
    );
  }

  deleteRole(id) {
    console.log('del clicked' + id);

    this.roleService.deleteRole(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('admin');
    },
      err => {
        console.log(err);
        this.router.navigateByUrl('admin');
      }
    );

}
}
