import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

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


@NgModule({
  declarations: [
    AdminComponent,
    AdminCustomerComponent,
    AdminCustomerAddComponent,
    AdminCustomerDeleteComponent,
    AdminCustomerDetailsComponent,
    AdminCustomerEditComponent,
    AdminDashboardComponent,
    AdminEmployeeComponent,
    AdminEmployeeAddComponent,
    AdminEmployeeDeleteComponent,
    AdminEmployeeDetailsComponent,
    AdminEmployeeEditComponent,
    AdminProfileComponent,
    AdminProfileAddComponent,
    AdminProfileDetailsComponent,
    AdminProfileEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AdminModule]
})

export class AdminModule { }
