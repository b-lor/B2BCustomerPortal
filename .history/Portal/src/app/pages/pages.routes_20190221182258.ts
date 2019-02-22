import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'profile',
        loadChildren: './user-profile/user-profile.module#UserProfileModule'
      },
      {
        path: 'change-login',
        loadChildren: './change-login/change-login.module#ChangeLoginModule'
      },
      {
        path: 'roles',
        loadChildren: './role/role.module#RoleModule'
      },
      {
        path: 'users',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'ticket',
        loadChildren: './ticket/ticket.module#TicketModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PagesRoutes {}
