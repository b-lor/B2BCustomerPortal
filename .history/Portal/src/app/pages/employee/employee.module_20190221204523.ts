import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent, ETicketComponent, EaddTicketComponent} from './';
import { EmployeeRoutes } from './employee.routes';

@NgModule({
  declarations: [
    EmployeeComponent,
    ETicketComponent,
    EaddTicketComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  exports: [
    CommonModule,
    EmployeeComponent
  ]
})
export class EmployeeModule { }
