import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CTicketComponent } from '../';

@NgModule({
  declarations: [
    CTicketComponent
],
imports: [
  CommonModule,
  DataTablesModule,
  FormsModule
],
exports: [
  CommonModule,
  DataTablesModule,
  CTicketComponent
]
})
export class CTicketModule { }
