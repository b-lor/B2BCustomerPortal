import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminComponent,
  UserAddComponent,
  UserEditComponent,
  UserDetailComponent,
  UserTransactionsComponent,
  SalesComponent
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
  },
  {
    path: 'sales',
    component: SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutes {}
