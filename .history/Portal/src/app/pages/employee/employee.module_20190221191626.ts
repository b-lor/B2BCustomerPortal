import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EmployeeComponent, EticketComponent, EaddTicketComponent } from './';

@NgModule({
  declarations: [
    EmployeeComponent,
    EticketComponent,
    EaddTicketComponent
],
imports: [
  CommonModule,
  DataTablesModule,
  FormsModule
],
exports: [
  CommonModule,
  DataTablesModule,
  EmployeeComponent,
  EticketComponent,
  EaddTicketComponent
]
})
export class EmployeeModule { }
