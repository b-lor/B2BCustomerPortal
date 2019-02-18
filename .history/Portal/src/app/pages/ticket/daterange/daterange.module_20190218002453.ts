import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { DaterangeComponent } from '../';

@NgModule({
  declarations: [
    DaterangeComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    DaterangeComponent,
    DataTablesModule,
    FormsModule
  ]
})
export class DaterangeModule { }
