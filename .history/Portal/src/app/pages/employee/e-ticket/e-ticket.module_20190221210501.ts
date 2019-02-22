import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EaddTicketComponent } from '../';

@NgModule({
  declarations: [
    EaddTicketComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
],
exports: [
  CommonModule,
  DataTablesModule,
  EaddTicketComponent
]
})
export class ETicketModule { }
