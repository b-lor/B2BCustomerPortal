import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { TicketComponent } from './';
import { TicketRoutes } from './ticket.routes';
import {
  AddTicketComponent,
  SearchComponent,
  DaterangeComponent,
  ClosedComponent,
  TicketDetailComponent,
  TicketEditComponent
} from './';

@NgModule({
  declarations: [
    AddTicketComponent,
    SearchComponent,
    DaterangeComponent,
    ClosedComponent,
    TicketDetailComponent,
    TicketComponent
  ],
  imports: [CommonModule, TicketRoutes, DataTablesModule],
  exports: [CommonModule, DataTablesModule, FormsModule]
})
export class TicketModule {}
