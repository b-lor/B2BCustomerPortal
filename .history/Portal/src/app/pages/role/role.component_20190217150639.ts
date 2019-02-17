import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoleService } from '../../shared/services';
import { Role } from '../../shared/models';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role;

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      role => {
        this.roles = role;
      },
      err => {}
    );
  }
  deleteRole(id) {
    this.roleService.deleteRole(id).subscribe(
      res => {
        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/dashboard');
      }
    );
  }
}
