import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';

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

const routes: Routes = [

  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CustomerDashboardComponent },
      { path: 'dashboard', component: CustomerDashboardComponent },

      { path: 'ticket', component: CustomerTicketComponent },
      { path: 'ticket/add', component: CustomerTicketAddComponent },
      { path: 'ticket/detail/:id', component: CustomerTicketDetailsComponent },
      { path: 'ticket/edit/:id', component: CustomerTicketEditComponent },

      { path: 'transactions', component: CustomerTransactionsComponent },
      { path: 'transactions/invoices', component: CustomerTransactionsInvoicesComponent },
      { path: 'transactions/sales', component: CustomerTransactionsSalesComponent },
      { path: 'transactions/detail/:id', component: CustomerTransactionsDetailComponent },

      { path: 'profile', component: CustomerProfileComponent },
      { path: 'profile/edit', component: CustomerProfileEditComponent },

      { path: 'login', component: CustomerLoginComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})

export class CustomerRoutingModule { }
