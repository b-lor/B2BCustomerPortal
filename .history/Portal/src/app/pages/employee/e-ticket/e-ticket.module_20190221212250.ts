import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EdetailTicketComponent } from '../';

@NgModule({
  declarations: [
    EdetailTicketComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
],
exports: [
  CommonModule,
  DataTablesModule,
  EdetailTicketComponent,
  FormsModule
]
})
export class ETicketModule { }
