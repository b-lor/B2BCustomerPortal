import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { SearchComponent } from './search/search.component';
import { DaterangeComponent } from './daterange/daterange.component';
import { ClosedComponent } from './closed/closed.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

@NgModule({
  declarations: [AddTicketComponent, SearchComponent, DaterangeComponent, ClosedComponent, TicketDetailComponent, TicketEditComponent],
  imports: [
    CommonModule
  ]
})
export class TicketModule { }
