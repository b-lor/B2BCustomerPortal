import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { TicketComponent } from './ticket/ticket.component';
import { CustomerComponent } from './customer/customer.component';
import { ErrorComponent } from './error/error.component';

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
        path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard, EmployeeGuard]
    },
    {
        path: 'admin',  component:  AdminComponent, canActivate: [AuthGuard, AdminGuard]
    },
    {
        path: 'manager', component: ManagerComponent, canActivate: [AuthGuard, ManagerGuard]
    },
    {
        path: 'ticket',  component:  TicketComponent, canActivate: [AuthGuard]
    },
    {
        path: 'customer',  component:  CustomerComponent, canActivate: [AuthGuard]
    },
    {
        path: 'error', component: ErrorComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
