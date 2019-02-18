import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketDetailComponent } from '../';

@NgModule({
  declarations: [TicketDetailComponent],
  imports: [CommonModule, DataTablesModule, FormsModule],
  exports: [CommonModule, DataTablesModule, FormsModule, TicketDetailComponent]
})
export class TicketDetailModule {}
