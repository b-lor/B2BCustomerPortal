import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CpaidComponent } from '../../';

@NgModule({
  declarations: [
    CpaidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    CpaidComponent
  ]
})
export class CpaidModule { }
