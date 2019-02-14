import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AdminTicketClosedComponent } from './admin-ticket-closed.component';

@NgModule({
  declarations: [
    AdminTicketClosedComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    AdminTicketClosedComponent
  ]
})
export class AdminTicketClosedModule { }
