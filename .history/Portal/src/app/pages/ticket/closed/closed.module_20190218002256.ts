import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { ClosedComponent } from '../';

@NgModule({
  declarations: [
    ClosedComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ClosedComponent
  ]
})
export class ClosedModule { }
