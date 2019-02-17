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

// routes
import { RoutesModule } from './routes';

// other

import { AuthGuard, AuthInterceptor } from './auth';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { FlashMessagesModule } from 'angular2-flash-messages';

// tslint:disable-next-line:max-line-length
import { RoleService, UserService,  UserAdminService, ProfileService, TransactionService, TicketService, TrackerService, Globals} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // SignUpComponent,
    // SignInComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    // AdminModule,
    // CustomerModule,
    // EmployeeModule,
    // ManagerModule,
    // TicketModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    // AdminTicketSearchIssueModule,
  //   TranslateModule.forRoot({
  //     loader: {
  //         provide: TranslateLoader,
  //         useFactory: createTranslateLoader,
  //         deps: [HttpClient]
  //     }
  // })

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
