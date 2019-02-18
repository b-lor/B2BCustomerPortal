import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TicketEditComponent } from '../';

@NgModule({
  declarations: [TicketEditComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    TicketEditComponent
  ]
})
export class TicketEditModule { }
