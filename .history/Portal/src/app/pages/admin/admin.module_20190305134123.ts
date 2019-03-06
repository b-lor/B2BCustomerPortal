import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AdminRoutes } from './admin.routes';
import {
  AdminComponent,
  UserAddComponent,
  UserEditComponent,
  UserDetailComponent,
  UserTransactionsComponent,
  SalesComponent,
  PerDayCustomerComponent
} from './';

@NgModule({
  declarations: [
    AdminComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailComponent,
    UserTransactionsComponent,
    SalesComponent,
    PerDayCustomerComponent],
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    AdminComponent
  ]
})
export class AdminModule { }
