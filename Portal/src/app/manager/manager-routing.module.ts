import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { ManagerGuard } from '../auth/manager.guard';

import { ManagerComponent } from './manager.component';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerProfileEditComponent } from './manager-profile/manager-profile-edit/manager-profile-edit.component';

import { ManagerSalesComponent } from './manager-sales/manager-sales.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';

const routes: Routes = [

  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard, ManagerGuard],
    children: [
      { path: '', component: ManagerDashboardComponent },

      { path: 'sales', component: ManagerSalesComponent },
      { path: 'login', component: ManagerLoginComponent },

      { path: 'profile', component: ManagerProfileComponent },
      { path: 'profile/edit/:id', component: ManagerProfileEditComponent }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})

export class ManagerRoutingModule { }
