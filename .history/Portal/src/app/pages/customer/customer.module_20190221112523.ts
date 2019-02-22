import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import {
  CustomerComponent,
  CTicketComponent,
  CaddTicketComponent,
  CticketDetailComponent,
  CticketEditComponent,
  CTransactionsComponent,
  CdetailComponent,
  CsalesComponent,
  CunpaidComponent,
  CpaidComponent
 } from './';

 import { CustomerRoutes } from './customer.routes';

@NgModule({
  declarations: [
    CustomerComponent,
    CTicketComponent,
    CTransactionsComponent,
    CaddTicketComponent,
    CticketDetailComponent,
    CticketEditComponent,
    CdetailComponent,
    CsalesComponent,
    CunpaidComponent,
    CpaidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CustomerRoutes,
    NgbCarouselModule,
    NgbAlertModule,
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    CustomerComponent
  ]
})
export class CustomerModule { }
