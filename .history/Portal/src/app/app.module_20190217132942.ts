// built-in
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { UserComponent, SignInComponent, SignUpComponent } from './user';
import { ForgotPasswordComponent } from './forgot-password';

// routes
import { RoutesModule } from './routes';

// other

import { AuthGuard, AuthInterceptor } from './shared/auth';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { FlashMessagesModule } from 'angular2-flash-messages';

// tslint:disable-next-line:max-line-length
import {
  RoleService,
  UserService,
  UserAdminService,
  ProfileService,
  TransactionService,
  TicketService,
  TrackerService
} from './shared/services';

import { Globals } from './shared/models';

@NgModule({
  declarations: [AppComponent, UserComponent, SignUpComponent, SignInComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot(),
    SlimLoadingBarModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService,
    UserAdminService,
    RoleService,
    ProfileService,
    TransactionService,
    TicketService,
    Globals,
    TrackerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
