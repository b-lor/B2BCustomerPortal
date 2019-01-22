import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';

import { AdminComponent } from './admin.component';

import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminCustomerAddComponent } from './admin-customer/admin-customer-add/admin-customer-add.component';
import { AdminCustomerDeleteComponent } from './admin-customer/admin-customer-delete/admin-customer-delete.component';
import { AdminCustomerDetailsComponent } from './admin-customer/admin-customer-details/admin-customer-details.component';
import { AdminCustomerEditComponent } from './admin-customer/admin-customer-edit/admin-customer-edit.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminEmployeeAddComponent } from './admin-employee/admin-employee-add/admin-employee-add.component';
import { AdminEmployeeDeleteComponent } from './admin-employee/admin-employee-delete/admin-employee-delete.component';
import { AdminEmployeeDetailsComponent } from './admin-employee/admin-employee-details/admin-employee-details.component';
import { AdminEmployeeEditComponent } from './admin-employee/admin-employee-edit/admin-employee-edit.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileAddComponent } from './admin-profile/admin-profile-add/admin-profile-add.component';
import { AdminProfileDetailsComponent } from './admin-profile/admin-profile-details/admin-profile-details.component';
import { AdminProfileEditComponent } from './admin-profile/admin-profile-edit/admin-profile-edit.component';


const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: AdminDashboardComponent },

      { path: 'customer', component: AdminCustomerComponent },
      { path: 'customer/add', component: AdminCustomerAddComponent },
      { path: 'customer/delete/:id', component: AdminCustomerDeleteComponent },
      { path: 'customer/detail/:id', component: AdminCustomerDetailsComponent },
      { path: 'customer/edit/:id', component: AdminCustomerEditComponent },

      { path: 'employee', component: AdminEmployeeComponent },
      { path: 'employee/add', component: AdminEmployeeAddComponent },
      { path: 'employee/delete/:id', component: AdminEmployeeDeleteComponent },
      { path: 'employee/detail/:id', component: AdminEmployeeDetailsComponent },
      { path: 'employee/edit/:id', component: AdminEmployeeEditComponent },

      { path: 'profile', component: AdminProfileComponent },
      { path: 'profile/add', component: AdminProfileAddComponent },
      { path: 'profile/detail/:id', component: AdminProfileDetailsComponent },
      { path: 'profile/edit/:id', component: AdminProfileEditComponent },
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

export class AdminRoutingModule { }
