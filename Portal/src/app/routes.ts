import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminEmployeeComponent } from './admin/admin-employee/admin-employee.component';
import { AdminCustomerComponent } from './admin/admin-customer/admin-customer.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerTicketComponent } from './customer/customer-ticket/customer-ticket.component';
import { CustomerTransactionsComponent } from './customer/customer-transactions/customer-transactions.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeTicketComponent } from './employee/employee-ticket/employee-ticket.component';

import { ManagerComponent } from './manager/manager.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';
import { ManagerProfileComponent } from './manager/manager-profile/manager-profile.component';
import { ManagerTicketComponent } from './manager/manager-ticket/manager-ticket.component';

import { TicketComponent } from './ticket/ticket.component';
import { TicketDashboardComponent } from './ticket/ticket-dashboard/ticket-dashboard.component';
import { IssueComponent } from './ticket/issue/issue.component';

import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { ManagerGuard } from './auth/manager.guard';
import { EmployeeGuard } from './auth/employee.guard';



export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
    },
    {
        path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard, EmployeeGuard],
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: EmployeeDashboardComponent },
            { path: 'profile', component: EmployeeProfileComponent },
            { path: 'ticket', component: EmployeeTicketComponent }
          ]
    },
    {
        path: 'admin',  component:  AdminComponent, canActivate: [AuthGuard, AdminGuard],
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'customer', component: AdminCustomerComponent },
            { path: 'profile', component: AdminProfileComponent },
            { path: 'employee', component: AdminEmployeeComponent }
          ]
    },
    {
        path: 'manager', component: ManagerComponent, canActivate: [AuthGuard, ManagerGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: ManagerDashboardComponent },
            { path: 'profile', component: ManagerProfileComponent },
            { path: 'ticket', component: ManagerTicketComponent }
          ]
    },
    {
        path: 'ticket',  component:  TicketComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: TicketDashboardComponent },
            { path: 'issue', component: IssueComponent }
          ]
    },
    {
        path: 'customer',  component:  CustomerComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CustomerDashboardComponent },
            { path: 'ticket', component: CustomerTicketComponent },
            { path: 'transactions', component: CustomerTransactionsComponent },
            { path: 'profile', component: CustomerProfileComponent }
          ]
    },
    {
        path: 'error', component: ErrorComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];

