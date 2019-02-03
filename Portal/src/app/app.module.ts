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

// modules
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';
import { TicketModule } from './ticket/ticket.module';

// routes
import { appRoutes } from './routes';

// other
import { Globals } from './shared/global';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { RoleService } from './shared/role.service';
import { UserService } from './shared/user.service';
import { UserAdminService } from './shared/user-admin.service';
import { ProfileService } from './shared/profile.service';
import { TransactionService } from './shared/transaction.service';
import { TicketService } from './shared/ticket.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AdminModule,
    CustomerModule,
    EmployeeModule,
    ManagerModule,
    TicketModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService,
  UserAdminService, RoleService,
  ProfileService, TransactionService,
  TicketService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
