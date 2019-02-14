import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DaterangepickerModule } from 'angular-2-daterangepicker';
import { AdminTicketSearchTicketDateRangeComponent } from './admin-ticket-search-ticket-date-range.component';

@NgModule({
  declarations: [
    AdminTicketSearchTicketDateRangeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DaterangepickerModule
  ],
  bootstrap: [
    AdminTicketSearchTicketDateRangeComponent
  ]
})
export class AdminTicketSearchTicketDateRangeModule { }
