import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AdminUserEditComponent } from './admin-user-edit.component';


@NgModule({
  declarations: [
    CommonModule,
    DataTablesModule,
    FormsModule

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminUserEditComponent
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    AdminUserEditComponent
  ],
})
export class AdminUserEditModule { }
