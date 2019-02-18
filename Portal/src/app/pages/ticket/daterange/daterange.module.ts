import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { DaterangeComponent } from '../';

@NgModule({
  declarations: [
    DaterangeComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  exports: [
    DaterangeComponent,
    DataTablesModule,
    FormsModule
  ]
})
export class DaterangeModule { }
