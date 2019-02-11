import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';

import { AdminComponent } from './admin.component';

import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { AdminTicketAddComponent } from './admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketDetailComponent } from './admin-ticket/admin-ticket-detail/admin-ticket-detail.component';
import { AdminTicketEditComponent } from './admin-ticket/admin-ticket-edit/admin-ticket-edit.component';
import { AdminTicketSearchComponent } from './admin-ticket/admin-ticket-search/admin-ticket-search.component';
import { AdminTicketInboxComponent } from './admin-ticket/admin-ticket-inbox/admin-ticket-inbox.component';
import { AdminTicketMyticketComponent } from './admin-ticket/admin-ticket-myticket/admin-ticket-myticket.component';
import { AdminTicketAssignedComponent } from './admin-ticket/admin-ticket-assigned/admin-ticket-assigned.component';
import { AdminTicketUnassignedComponent } from './admin-ticket/admin-ticket-unassigned/admin-ticket-unassigned.component';
import { AdminTicketOverdueComponent } from './admin-ticket/admin-ticket-overdue/admin-ticket-overdue.component';

import { AdminRoleComponent } from './admin-role/admin-role.component';
import { AdminRoleAddComponent } from './admin-role/admin-role-add/admin-role-add.component';
import { AdminRoleEditComponent } from './admin-role/admin-role-edit/admin-role-edit.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserAddComponent } from './admin-user/admin-user-add/admin-user-add.component';
import { AdminUserDetailComponent } from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserEditComponent } from './admin-user/admin-user-edit/admin-user-edit.component';
import { AdminUserTransactionComponent } from './admin-user/admin-user-transaction/admin-user-transaction.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileEditComponent } from './admin-profile/admin-profile-edit/admin-profile-edit.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';

import { SearchTicketComponent } from './admin-ticket/admin-ticket-search/search-ticket/search-ticket.component';
import { SearchTicketDateRangeComponent } from './admin-ticket/admin-ticket-search/search-ticket-date-range/search-ticket-date-range.component';
import { SearchIssueComponent } from './admin-ticket/admin-ticket-search/search-issue/search-issue.component';
import { SearchPriorityComponent } from './admin-ticket/admin-ticket-search/search-priority/search-priority.component';
import { SearchStatusComponent } from './admin-ticket/admin-ticket-search/search-status/search-status.component';
import { SearchTrackerComponent } from './admin-ticket/admin-ticket-search/search-tracker/search-tracker.component';
import { SearchTrackerDateRangeComponent } from './admin-ticket/admin-ticket-search/search-tracker-date-range/search-tracker-date-range.component';


const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'login', component: AdminLoginComponent },

      { path: 'ticket', component: AdminTicketComponent },
      { path: 'ticket/add', component: AdminTicketAddComponent },
      { path: 'ticket/detail/:id', component: AdminTicketDetailComponent },
      { path: 'ticket/edit/:id', component: AdminTicketEditComponent },
      { path: 'ticket/assigned', component: AdminTicketAssignedComponent },
      { path: 'ticket/inbox', component: AdminTicketInboxComponent },
      { path: 'ticket/myticket', component: AdminTicketMyticketComponent },
      { path: 'ticket/overdue', component: AdminTicketOverdueComponent },
      { path: 'ticket/unassigned', component: AdminTicketUnassignedComponent },
      { path: 'ticket/search', component: AdminTicketSearchComponent },

      { path: 'ticket/search/ticket', component: SearchTicketComponent },
      { path: 'ticket/search/ticket-date-range', component: SearchTicketDateRangeComponent },
      { path: 'ticket/search/issue', component: SearchIssueComponent },
      { path: 'ticket/search/priority', component: SearchPriorityComponent },
      { path: 'ticket/search/status', component: SearchStatusComponent },
      { path: 'ticket/search/tracker', component: SearchTrackerComponent },
      { path: 'ticket/search/tracker-date-range', component: SearchTrackerDateRangeComponent },


      { path: 'role', component: AdminRoleComponent },
      { path: 'role/add', component: AdminRoleAddComponent },
      { path: 'role/edit/:id', component: AdminRoleEditComponent },

      { path: 'user', component: AdminUserComponent },
      { path: 'user/add', component: AdminUserAddComponent },
      { path: 'user/detail/:id', component: AdminUserDetailComponent },
      { path: 'user/edit/:id', component: AdminUserEditComponent },
      { path: 'user/transaction/:id', component: AdminUserTransactionComponent },

      { path: 'profile', component: AdminProfileComponent },
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