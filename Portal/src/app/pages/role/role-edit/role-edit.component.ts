import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Role } from '../../../shared/models';
import { RoleService } from '../../../shared/services';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  role: Role;
  roleID;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {
    this.route.params.subscribe(params => {
      this.roleID = params['id'];
    });
  }

  ngOnInit() {
    const roleSub = this.roleService.getRole(this.roleID).subscribe(role => {
      this.role = role;
      roleSub.unsubscribe();
    });
  }

  onSubmit() {
    this.roleService.updateRole(this.role._id, this.role).subscribe(
      res => {
        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
      }
    );
  }
}
