import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { CdetailComponent } from '../../';

@NgModule({
  declarations: [
    CdetailComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    CdetailComponent
  ]
})
export class CdetailModule { }
