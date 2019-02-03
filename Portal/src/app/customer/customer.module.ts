import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from '././customer-routing.module';

import { CustomerComponent } from './customer.component';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileEditComponent } from './customer-profile/customer-profile-edit/customer-profile-edit.component';

import { CustomerTicketComponent } from './customer-ticket/customer-ticket.component';
import { CustomerTicketAddComponent } from './customer-ticket/customer-ticket-add/customer-ticket-add.component';
import { CustomerTicketDetailsComponent } from './customer-ticket/customer-ticket-details/customer-ticket-details.component';
import { CustomerTicketEditComponent } from './customer-ticket/customer-ticket-edit/customer-ticket-edit.component';

import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
// tslint:disable-next-line:max-line-length
import { CustomerTransactionsInvoicesComponent } from './customer-transactions/customer-transactions-invoices/customer-transactions-invoices.component';
// tslint:disable-next-line:max-line-length
import { CustomerTransactionsSalesComponent } from './customer-transactions/customer-transactions-sales/customer-transactions-sales.component';
// tslint:disable-next-line:max-line-length
import { CustomerTransactionsDetailComponent } from './customer-transactions/customer-transactions-detail/customer-transactions-detail.component';

import { CustomerLoginComponent } from './customer-login/customer-login.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDashboardComponent,
    CustomerProfileComponent,
    CustomerProfileEditComponent,
    CustomerTicketComponent,
    CustomerTicketAddComponent,
    CustomerTicketDetailsComponent,
    CustomerTicketEditComponent,
    CustomerTransactionsComponent,
    CustomerTransactionsInvoicesComponent,
    CustomerTransactionsSalesComponent,
    CustomerTransactionsDetailComponent,
    CustomerLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
  ],
  providers: [],
  bootstrap: [CustomerDashboardComponent]
})

export class CustomerModule { }
