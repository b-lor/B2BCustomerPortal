import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EmployeeComponent } from './';

@NgModule({
  declarations: [
    EmployeeComponent
],
imports: [
  CommonModule,
  DataTablesModule,
  FormsModule
],
exports: [
  CommonModule,
  DataTablesModule,
  EmployeeComponent
]
})
export class EmployeeModule { }
