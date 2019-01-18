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

import { AuthGuard } from './auth/auth.guard';
// import { AdminGuard } from '../../../server/guards/isAdmin';
// import { ManagerGuard } from '../../../server/guards/isManager';
// import { EmployeeGuard } from '../../../server/guards/isEmployee';



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
        path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'admin',  component:  AdminComponent, canActivate: [AuthGuard]
    },
    {
        path: 'manager', component: ManagerComponent, canActivate: [AuthGuard]
    },
    {
        path: 'ticket',  component:  TicketComponent, canActivate: [AuthGuard]
    },
    {
        path: 'customer',  component:  CustomerComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
