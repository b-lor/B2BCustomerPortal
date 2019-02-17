import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeLoginComponent } from './';
import { ChangeLoginRoutes } from './change-login.routes';

@NgModule({
  declarations: [ChangeLoginComponent],
  imports: [
    CommonModule,
    ChangeLoginRoutes
  ]
})
export class ChangeLoginModule { }
