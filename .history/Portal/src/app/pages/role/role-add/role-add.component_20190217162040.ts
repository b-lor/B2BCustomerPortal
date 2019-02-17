import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Role } from '../../../shared/models';
import { RoleService } from '../../../shared/services';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {
  newRole = new Role();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.roleService.addRole(this.newRole).subscribe(
      res => {
        console.log(res);

        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
      }
    );
  }
}
