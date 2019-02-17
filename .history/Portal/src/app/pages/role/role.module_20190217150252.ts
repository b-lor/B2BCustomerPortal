import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleComponent } from './';
import { RoleRoutes } from './role.routes';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RoleRoutes
  ]
})
export class RoleModule { }
