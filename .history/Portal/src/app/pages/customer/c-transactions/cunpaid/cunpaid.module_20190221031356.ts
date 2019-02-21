import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CunpaidComponent } from '../../';

@NgModule({
  declarations: [
    CunpaidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    CunpaidComponent
  ]
})
export class CunpaidModule { }
