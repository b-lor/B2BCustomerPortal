import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CTicketComponent } from './c-ticket/c-ticket.component';
import { CTransactionsComponent } from './c-transactions/c-transactions.component';
import { CaddTicketComponent } from './c-ticket/cadd-ticket/cadd-ticket.component';
import { CclosedComponent } from './c-ticket/cclosed/cclosed.component';
import { CdaterangeComponent } from './c-ticket/cdaterange/cdaterange.component';
import { CsearchComponent } from './c-ticket/csearch/csearch.component';
import { CticketDetailComponent } from './c-ticket/cticket-detail/cticket-detail.component';
import { CticketEditComponent } from './c-ticket/cticket-edit/cticket-edit.component';
import { CdetailComponent } from './c-transactions/cdetail/cdetail.component';

@NgModule({
  declarations: [CTicketComponent, CTransactionsComponent, CaddTicketComponent, CclosedComponent, CdaterangeComponent, CsearchComponent, CticketDetailComponent, CticketEditComponent, CdetailComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
