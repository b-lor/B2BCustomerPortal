import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { logging } from 'protractor';

export const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
      path: logging,
      component: 
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UserRoutes {
}
