import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import {
  CustomerComponent,
  CTicketComponent,
  CaddTicketComponent,
  CclosedComponent,
  CdaterangeComponent,
  CsearchComponent,
  CticketDetailComponent,
  CticketEditComponent,
  CTransactionsComponent,
  CdetailComponent
 } from './';

 import { CustomerRoutes } from './customer.routes';

@NgModule({
  declarations: [
    CustomerComponent,
    CTicketComponent,
    CTransactionsComponent,
    CaddTicketComponent,
    CclosedComponent,
    CdaterangeComponent,
    CsearchComponent,
    CticketDetailComponent,
    CticketEditComponent,
    CdetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CustomerRoutes
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    CustomerComponent
  ]
})
export class CustomerModule { }
