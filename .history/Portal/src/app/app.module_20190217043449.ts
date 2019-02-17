// built-in
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// components
import { AppComponent } from './app.component';

// import { UserComponent } from './user/user.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

// modules
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminTicketSearchIssueModule} from './admin/admin-ticket/admin-ticket-search-issue/admin-ticket-search-issue.module';
// routes
import { RoutesModule } from './routes';

// other
import { Globals } from './shared/global';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ConfirmEqualValidatorDirective } from '../app/shared/confirmPassword';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { RoleService } from './shared/role.service';
import { UserService } from './shared/user.service';
import { UserAdminService } from './shared/user-admin.service';
import { ProfileService } from './shared/profile.service';
import { TransactionService } from './shared/transaction.service';
import { TicketService } from './shared/ticket.service';
import { TrackerService } from './shared/tracker.service';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';



// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
      '.json'
  ); */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // SignUpComponent,
    // SignInComponent,
    UserProfileComponent,

    ConfirmEqualValidatorDirective,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AdminModule,
    CustomerModule,
    EmployeeModule,
    ManagerModule,
    TicketModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AdminTicketSearchIssueModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard,
  UserService,
  UserAdminService,
  RoleService,
  ProfileService,
  TransactionService,
  TicketService,
  Globals,
  TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
