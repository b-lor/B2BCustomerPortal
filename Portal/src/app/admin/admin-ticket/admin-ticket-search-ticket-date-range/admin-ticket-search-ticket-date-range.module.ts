import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTicketSearchTicketDateRangeComponent } from './admin-ticket-search-ticket-date-range.component';

@NgModule({
  declarations: [
    AdminTicketSearchTicketDateRangeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AdminTicketSearchTicketDateRangeComponent
  ]
})
export class AdminTicketSearchTicketDateRangeModule { }
