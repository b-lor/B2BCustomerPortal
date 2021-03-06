import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from '././employee-routing.module';

import { EmployeeComponent } from './employee.component';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile/employee-profile-edit/employee-profile-edit.component';

import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { EmployeeTicketAddComponent } from './employee-ticket/employee-ticket-add/employee-ticket-add.component';
import { EmployeeTicketDetailsComponent } from './employee-ticket/employee-ticket-details/employee-ticket-details.component';
import { EmployeeTicketEditComponent } from './employee-ticket/employee-ticket-edit/employee-ticket-edit.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeeProfileEditComponent,
    EmployeeTicketComponent,
    EmployeeTicketAddComponent,
    EmployeeTicketDetailsComponent,
    EmployeeTicketEditComponent,
    EmployeeLoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [EmployeeDashboardComponent]
})

export class EmployeeModule { }
