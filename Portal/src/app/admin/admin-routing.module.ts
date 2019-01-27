import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';

import { AdminComponent } from './admin.component';

// import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
// import { AdminCustomerAddComponent } from './admin-customer/admin-customer-add/admin-customer-add.component';
// import { AdminCustomerDeleteComponent } from './admin-customer/admin-customer-delete/admin-customer-delete.component';
// import { AdminCustomerDetailsComponent } from './admin-customer/admin-customer-details/admin-customer-details.component';
// import { AdminCustomerEditComponent } from './admin-customer/admin-customer-edit/admin-customer-edit.component';

import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { AdminTicketAddComponent } from './admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketDeleteComponent } from './admin-ticket/admin-ticket-delete/admin-ticket-delete.component';
import { AdminTicketDetailComponent } from './admin-ticket/admin-ticket-detail/admin-ticket-detail.component';
import { AdminTicketEditComponent } from './admin-ticket/admin-ticket-edit/admin-ticket-edit.component';

import { AdminRoleComponent } from './admin-role/admin-role.component';
import { AdminRoleAddComponent } from './admin-role/admin-role-add/admin-role-add.component';
import { AdminRoleDeleteComponent } from './admin-role/admin-role-delete/admin-role-delete.component';
import { AdminRoleDetailComponent } from './admin-role/admin-role-detail/admin-role-detail.component';
import { AdminRoleEditComponent } from './admin-role/admin-role-edit/admin-role-edit.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserAddComponent } from './admin-user/admin-user-add/admin-user-add.component';
import { AdminUserDeleteComponent } from './admin-user/admin-user-delete/admin-user-delete.component';
import { AdminUserDetailComponent } from './admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserEditComponent } from './admin-user/admin-user-edit/admin-user-edit.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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
      { path: 'dashboard', component: AdminDashboardComponent },
// delete customer after testing user
      { path: 'ticket', component: AdminTicketComponent },
      { path: 'ticket/add', component: AdminTicketAddComponent },
      { path: 'ticket/delete/:id', component: AdminTicketDeleteComponent },
      { path: 'ticket/detail/:id', component: AdminTicketDetailComponent },
      { path: 'ticket/edit/:id', component: AdminTicketEditComponent },

      { path: 'role', component: AdminRoleComponent },
      { path: 'role/add', component: AdminRoleAddComponent },
      { path: 'role/delete/:id', component: AdminRoleDeleteComponent },
      { path: 'role/detail/:id', component: AdminRoleDetailComponent },
      { path: 'role/edit/:id', component: AdminRoleEditComponent },

      { path: 'user', component: AdminUserComponent },
      { path: 'user/add', component: AdminUserAddComponent },
      { path: 'user/delete/:id', component: AdminUserDeleteComponent },
      { path: 'user/detail/:id', component: AdminUserDetailComponent },
      { path: 'user/edit/:id', component: AdminUserEditComponent },

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
