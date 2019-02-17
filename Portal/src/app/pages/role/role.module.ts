import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { RoleComponent } from './';
import { RoleRoutes } from './role.routes';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';

@NgModule({
  declarations: [RoleComponent, RoleAddComponent, RoleEditComponent],
  imports: [
    CommonModule,
    RoleRoutes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoleModule { }
