import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserDetailComponent } from './admin-user-detail.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminUserDetailComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    AdminUserDetailComponent
  ]
})
export class AdminUserDetailModule { }
