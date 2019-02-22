import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EmployeeComponent, ETicketComponent, EdetailTicketComponent} from './';
import { EmployeeRoutes } from './employee.routes';

@NgModule({
  declarations: [
    EmployeeComponent,
    ETicketComponent,
    EdetailTicketComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutes,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    CommonModule,
    EmployeeComponent,
    DataTablesModule
  ]
})
export class EmployeeModule { }
