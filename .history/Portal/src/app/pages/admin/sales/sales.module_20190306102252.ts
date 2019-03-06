import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SalesComponent, PerDayCustomerComponent } from '../';
import { SalesService } from '../../../shared/services';

@NgModule({
  declarations: [SalesComponent, PerDayCustomerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [SalesService],
  bootstrap: [SalesComponent],
})
export class SalesModule { }
