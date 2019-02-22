import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeGuard, AdminGuard, ManagerGuard, CustomerGuard, AuthGuard } from '../shared/auth';

import { PagesComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard, AdminGuard]
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
        loadChildren: './role/role.module#RoleModule',
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'users',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'ticket',
        loadChildren: './ticket/ticket.module#TicketModule',
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule',
        canActivate: [AuthGuard, CustomerGuard]
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule',
        canActivate: [AuthGuard, EmployeeGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PagesRoutes {}
