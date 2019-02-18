import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { RoleComponent } from './';
import { RoleRoutes } from './role.routes';
import { RoleAddComponent, RoleEditComponent } from './';

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
