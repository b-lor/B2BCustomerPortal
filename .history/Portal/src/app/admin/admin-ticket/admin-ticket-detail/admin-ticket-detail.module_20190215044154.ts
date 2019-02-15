import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTicketDetailComponent } from './admin-ticket-detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AdminTicketDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AdminTicketDetailComponent
  ],
  exports: [
    DataTablesModule,
    AdminTicketDetailComponent
  ]
})
export class AdminTicketDetailModule { }
