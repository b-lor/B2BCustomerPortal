import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AdminComponent } from './';
import { AdminRoutes } from './admin.routes';
import { UserAddComponent, UserEditComponent, UserDetailComponent, UserTransactionsComponent } from './';

@NgModule({
  declarations: [AdminComponent, UserAddComponent, UserEditComponent, UserDetailComponent, UserTransactionsComponent],
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
