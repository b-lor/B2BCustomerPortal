import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileAddComponent } from './admin-profile/admin-profile-add/admin-profile-add.component';
import { AdminProfileDetailsComponent } from './admin-profile/admin-profile-details/admin-profile-details.component';
import { AdminProfileEditComponent } from './admin-profile/admin-profile-edit/admin-profile-edit.component';

import { AdminRoleComponent } from './admin-role/admin-role.component';
import { AdminRoleAddComponent } from './admin-role/admin-role-add/admin-role-add.component';
import { AdminRoleDeleteComponent } from './admin-role/admin-role-delete/admin-role-delete.component';
import { AdminRoleDetailComponent } from './admin-role/admin-role-detail/admin-role-detail.component';
import { AdminRoleEditComponent } from './admin-role/admin-role-edit/admin-role-edit.component';

import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { AdminTicketAddComponent } from './admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketEditComponent } from './admin-ticket/admin-ticket-edit/admin-ticket-edit.component';
import { AdminTicketDetailComponent } from './admin-ticket/admin-ticket-detail/admin-ticket-detail.component';
import { AdminTicketDeleteComponent } from './admin-ticket/admin-ticket-delete/admin-ticket-delete.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserAddComponent } from './admin-user/admin-user-add/admin-user-add.component';
import { AdminUserDeleteComponent } from './admin-user/admin-user-delete/admin-user-delete.component';
import { AdminUserDetailComponent } from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserEditComponent } from './admin-user/admin-user-edit/admin-user-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminProfileAddComponent,
    AdminProfileDetailsComponent,
    AdminProfileEditComponent,
    AdminRoleComponent,
    AdminRoleAddComponent,
    AdminRoleDeleteComponent,
    AdminRoleDetailComponent,
    AdminRoleEditComponent,
    AdminTicketComponent,
    AdminTicketAddComponent,
    AdminTicketEditComponent,
    AdminTicketDetailComponent,
    AdminTicketDeleteComponent,
    AdminUserComponent,
    AdminUserAddComponent,
    AdminUserDeleteComponent,
    AdminUserDetailComponent,
    AdminUserEditComponent
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
