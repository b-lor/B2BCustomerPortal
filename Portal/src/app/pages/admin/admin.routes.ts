import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminComponent,
  UserAddComponent,
  UserEditComponent,
  UserDetailComponent,
  UserTransactionsComponent
 } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'transaction/:id',
    component: UserTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutes {}
