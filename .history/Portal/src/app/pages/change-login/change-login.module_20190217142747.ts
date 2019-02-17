import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ChangeLoginComponent } from './';
import { ChangeLoginRoutes } from './change-login.routes';

@NgModule({
  declarations: [ChangeLoginComponent],
  imports: [
    CommonModule,
    ChangeLoginRoutes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangeLoginModule { }
