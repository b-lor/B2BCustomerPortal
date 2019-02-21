import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CsalesComponent } from '../../';

@NgModule({
  declarations: [
    CsalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    CsalesComponent
  ]
})
export class CsalesModule { }
