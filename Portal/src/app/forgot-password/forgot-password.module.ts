import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './';
import { ForgotPasswordRoutes } from './forgot-password.routes';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutes
  ]
})
export class ForgotPasswordModule { }
