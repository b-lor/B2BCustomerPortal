import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from '././employee-routing.module';
import { TimelineComponent, NotificationComponent, ChatComponent } from './components';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../app/share';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';


import { EmployeeComponent } from './employee.component';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile/employee-profile-edit/employee-profile-edit.component';

import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { EmployeeTicketAddComponent } from './employee-ticket/employee-ticket-add/employee-ticket-add.component';
import { EmployeeTicketDetailsComponent } from './employee-ticket/employee-ticket-details/employee-ticket-details.component';
import { EmployeeTicketEditComponent } from './employee-ticket/employee-ticket-edit/employee-ticket-edit.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';


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
    EmployeeLoginComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    NgbCarouselModule,
    StatModule,
    TranslateModule,
    NgbDropdownModule,
    DataTablesModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [EmployeeDashboardComponent]
})

export class EmployeeModule { }
