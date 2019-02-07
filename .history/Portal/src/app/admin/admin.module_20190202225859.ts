import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileEditComponent } from './admin-profile/admin-profile-edit/admin-profile-edit.component';

import { AdminRoleComponent } from './admin-role/admin-role.component';
import { AdminRoleAddComponent } from './admin-role/admin-role-add/admin-role-add.component';
import { AdminRoleEditComponent } from './admin-role/admin-role-edit/admin-role-edit.component';

import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { AdminTicketAddComponent } from './admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketEditComponent } from './admin-ticket/admin-ticket-edit/admin-ticket-edit.component';
import { AdminTicketDetailComponent } from './admin-ticket/admin-ticket-detail/admin-ticket-detail.component';
import { AdminTicketSearchComponent } from './admin-ticket/admin-ticket-search/admin-ticket-search.component';
import { AdminTicketInboxComponent } from './admin-ticket/admin-ticket-inbox/admin-ticket-inbox.component';
import { AdminTicketMyticketComponent } from './admin-ticket/admin-ticket-myticket/admin-ticket-myticket.component';
import { AdminTicketAssignedComponent } from './admin-ticket/admin-ticket-assigned/admin-ticket-assigned.component';
import { AdminTicketUnassignedComponent } from './admin-ticket/admin-ticket-unassigned/admin-ticket-unassigned.component';
import { AdminTicketOverdueComponent } from './admin-ticket/admin-ticket-overdue/admin-ticket-overdue.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserAddComponent } from './admin-user/admin-user-add/admin-user-add.component';
import { AdminUserDetailComponent } from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserEditComponent } from './admin-user/admin-user-edit/admin-user-edit.component';
import { AdminUserTransactionComponent } from './admin-user/admin-user-transaction/admin-user-transaction.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminProfileEditComponent,
    AdminRoleComponent,
    AdminRoleAddComponent,
    AdminRoleEditComponent,
    AdminTicketComponent,
    AdminTicketAddComponent,
    AdminTicketEditComponent,
    AdminTicketDetailComponent,
    AdminUserComponent,
    AdminUserAddComponent,
    AdminUserDetailComponent,
    AdminUserEditComponent,
    AdminTicketSearchComponent,
    AdminUserTransactionComponent,
    AdminTicketInboxComponent,
    AdminTicketMyticketComponent,
    AdminTicketAssignedComponent,
    AdminTicketUnassignedComponent,
    AdminTicketOverdueComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AdminDashboardComponent]
})

export class AdminModule { }
