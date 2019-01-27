import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Role } from '../../../shared/role.model';
import { RoleService } from '../../../shared/role.service';

@Component({
  selector: 'app-admin-role-edit',
  templateUrl: './admin-role-edit.component.html',
  styleUrls: ['./admin-role-edit.component.css']
})
export class AdminRoleEditComponent implements OnInit {
  role: Role;
  roleID;

  constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService ) {
    this.route.params.subscribe(params => {
      this.roleID = params['id'];
    });
   }

   ngOnInit() {
    const roleSub = this.roleService.getRole(this.roleID).subscribe(role => {
      this.role = role;

      console.log(role);

      roleSub.unsubscribe();
    })
  }

  onSubmit() {
    console.log(this.role);

    this.roleService.updateRole(this.role._id, this.role).subscribe(res => {
      console.log(res);

      this.router.navigateByUrl('admin');

    },
      err => {
        console.log(err);
      }
    );
  }

}
