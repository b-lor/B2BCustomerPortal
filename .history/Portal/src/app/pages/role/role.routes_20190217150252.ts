import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: RoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RoleRoutes {}
