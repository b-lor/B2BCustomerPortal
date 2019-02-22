import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EdetailTicketComponent, EclosedTicketComponent } from '../';

@NgModule({
  declarations: [
    EdetailTicketComponent,
    EclosedTicketComponent
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
  EclosedTicketComponent,
  FormsModule
]
})
export class ETicketModule { }
