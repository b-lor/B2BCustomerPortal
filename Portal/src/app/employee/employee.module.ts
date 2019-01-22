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


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeeProfileEditComponent,
    EmployeeTicketComponent,
    EmployeeTicketAddComponent,
    EmployeeTicketDetailsComponent,
    EmployeeTicketEditComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
  ],
  providers: [],
  bootstrap: [CustomerModule]
})

export class EmployeeModule { }
