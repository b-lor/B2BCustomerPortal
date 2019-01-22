// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

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

// routes
import { appRoutes } from './routes';

// other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { UserService } from './shared/user.service';
import { ProfileService } from './shared/profile.service';
import { TransactionService } from './shared/transaction.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeeTicketComponent,
    AdminComponent,
    AdminProfileComponent,
    AdminDashboardComponent,
    AdminEmployeeComponent,
    AdminCustomerComponent,
    ManagerComponent,
    ManagerDashboardComponent,
    ManagerProfileComponent,
    ManagerTicketComponent,
    CustomerComponent,
    CustomerProfileComponent,
    CustomerDashboardComponent,
    CustomerTicketComponent,
    CustomerTransactionsComponent,
    ErrorComponent,
    TicketComponent,
    TicketDashboardComponent,
    IssueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService,
  ProfileService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
