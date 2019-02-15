import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeTicketComponent } from './employee-ticket.component';

@NgModule({
  declarations: [
    EmployeeTicketComponent
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
    EmployeeTicketComponent
  ]
})
export class EmployeeTicketModule { }
