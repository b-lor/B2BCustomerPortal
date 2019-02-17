import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './';
import { RoleAddComponent } from './';
import { RoleEditComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: RoleComponent
  },
  {
    path: 'add',
    component: RoleAddComponent
  },
  {
    path: 'edit/:id',
    component: RoleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RoleRoutes {}
