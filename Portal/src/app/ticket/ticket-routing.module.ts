import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';

import { TicketComponent } from './ticket.component';

import { TicketService } from '../shared/ticket.service';
import { TicketDashboardComponent } from '../ticket/ticket-dashboard/ticket-dashboard.component';
import { TicketAddComponent } from '../ticket/ticket-add/ticket-add.component';
import { TicketDetailComponent } from '../ticket/ticket-detail/ticket-detail.component';
import { TicketEditComponent } from '../ticket/ticket-edit/ticket-edit.component';
import { TicketSearchComponent } from '../ticket/ticket-search/ticket-search.component';

const routes: Routes = [

  {
    path: 'ticket',
    component: TicketComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TicketDashboardComponent },
      { path: 'dashboard', component: TicketDashboardComponent },

      { path: 'ticket/', component: TicketComponent },
      { path: 'ticket/add/', component: TicketAddComponent },
      { path: 'ticket/detail/:id', component: TicketDetailComponent },
      { path: 'ticket/edit/:id', component: TicketEditComponent },
      { path: 'ticket/search/', component: TicketSearchComponent }
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

export class TicketRoutingModule { }
