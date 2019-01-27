import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';

import { Role } from '../../../shared/role.model';
import { RoleService } from '../../../shared/role.service';

@Component({
  selector: 'app-admin-role-add',
  templateUrl: './admin-role-add.component.html',
  styleUrls: ['./admin-role-add.component.css']
})
export class AdminRoleAddComponent implements OnInit {
  newRole = new Role();

  constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService) { }

  ngOnInit() {

  }

  onSubmit() {

    this.roleService.addRole(this.newRole).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('admin');
  
    },
      err => {
        console.log(err);
      }
    );
  }
  }
  