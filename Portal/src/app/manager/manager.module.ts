import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';

import { ManagerComponent } from './manager.component';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerProfileEditComponent } from './manager-profile/manager-profile-edit/manager-profile-edit.component';

import { ManagerTicketComponent } from './manager-ticket/manager-ticket.component';
import { ManagerTicketAddComponent } from './manager-ticket/manager-ticket-add/manager-ticket-add.component';
import { ManagerTicketDetailsComponent } from './manager-ticket/manager-ticket-details/manager-ticket-details.component';
import { ManagerTicketEditComponent } from './manager-ticket/manager-ticket-edit/manager-ticket-edit.component';


@NgModule({
  declarations: [
    ManagerComponent,
    ManagerDashboardComponent,
    ManagerProfileComponent,
    ManagerProfileEditComponent,
    ManagerTicketComponent,
    ManagerTicketAddComponent,
    ManagerTicketDetailsComponent,
    ManagerTicketEditComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ManagerRoutingModule,
  ],
  providers: [],
  bootstrap: [ManagerDashboardComponent]
})

export class ManagerModule { }
