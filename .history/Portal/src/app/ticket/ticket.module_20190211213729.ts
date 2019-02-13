import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketRoutingModule } from '././ticket-routing.module';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';

import { TicketComponent } from './ticket.component';

import { TicketService } from '../shared/ticket.service';
import { TicketDashboardComponent } from '../ticket/ticket-dashboard/ticket-dashboard.component';
import { TicketAddComponent } from '../ticket/ticket-add/ticket-add.component';
import { TicketDetailComponent } from '../ticket/ticket-detail/ticket-detail.component';
import { TicketEditComponent } from '../ticket/ticket-edit/ticket-edit.component';
import { TicketSearchComponent } from '../ticket/ticket-search/ticket-search.component';

@NgModule({
  declarations: [
    TicketComponent,
    TicketDashboardComponent,
    TicketAddComponent,
    TicketDetailComponent,
    TicketEditComponent,
    TicketSearchComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    TicketRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [TicketDashboardComponent]
})

export class TicketModule { }