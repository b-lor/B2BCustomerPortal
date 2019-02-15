import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminTicketEditComponent } from './admin-ticket-edit.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AdminTicketEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AdminTicketEditComponent
  ],
  exports: [
    DataTablesModule,
    AdminTicketEditComponent
  ]
})
export class AdminTicketEditModule { }
