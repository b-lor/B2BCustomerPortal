import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CTransactionsComponent } from '../';

@NgModule({
  declarations: [
    CTransactionsComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    CTransactionsComponent
  ]
})
export class CTransactionsModule { }
