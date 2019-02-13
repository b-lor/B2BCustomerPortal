import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { TimelineComponent, NotificationComponent, ChatComponent } from './components';

import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../app/share';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
import { HeaderComponent } from './components-nav/header/header.component';
import { SidebarComponent } from './components-nav/sidebar/sidebar.component';
import { PageHeaderModule } from '../share/';
import { AdminTicketSearchTicketComponent } from './admin-ticket/admin-ticket-search-ticket/admin-ticket-search-ticket.component';
import { AdminTicketSearchPriorityComponent } from './admin-ticket/admin-ticket-search-priority/admin-ticket-search-priority.component';
import { AdminTicketSearchStatusComponent } from './admin-ticket/admin-ticket-search-status/admin-ticket-search-status.component';
import { AdminTicketSearchTicketDateRangeComponent } from './admin-ticket/admin-ticket-search-ticket-date-range/admin-ticket-search-ticket-date-range.component';
import { AdminTicketSearchTrackerDateRangeComponent } from './admin-ticket/admin-ticket-search-tracker-date-range/admin-ticket-search-tracker-date-range.component';
import { AdminTicketSearchTrackerComponent } from './admin-ticket/admin-ticket-search-tracker/admin-ticket-search-tracker.component';

import { DataTablesModule } from 'angular-datatables';

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
    AdminTicketSearchTicketComponent
    AdminLoginComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    HeaderComponent,
    SidebarComponent,
    AdminTicketSearchPriorityComponent,
    AdminTicketSearchStatusComponent,
    AdminTicketSearchTicketDateRangeComponent,
    AdminTicketSearchTrackerDateRangeComponent,
    AdminTicketSearchTrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    StatModule,
    NgbCarouselModule,
    NgbAlertModule,
    TranslateModule,
    NgbDropdownModule,
    PageHeaderModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AdminDashboardComponent]
})

export class AdminModule { }
