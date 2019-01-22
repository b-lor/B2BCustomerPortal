import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { ManagerGuard } from '../auth/manager.guard';

import { ManagerComponent } from './manager.component';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerProfileEditComponent } from './manager-profile/manager-profile-edit/manager-profile-edit.component';

import { ManagerTicketComponent } from './manager-ticket/manager-ticket.component';
import { ManagerTicketAddComponent } from './manager-ticket/manager-ticket-add/manager-ticket-add.component';
import { ManagerTicketDetailsComponent } from './manager-ticket/manager-ticket-details/manager-ticket-details.component';
import { ManagerTicketEditComponent } from './manager-ticket/manager-ticket-edit/manager-ticket-edit.component';

const routes: Routes = [

  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard, ManagerGuard],
    children: [
      { path: '', component: ManagerDashboardComponent },

      { path: 'ticket', component: ManagerTicketComponent },
      { path: 'ticket/add', component: ManagerTicketAddComponent },
      { path: 'ticket/detail/:id', component: ManagerTicketDetailsComponent },
      { path: 'ticket/edit/:id', component: ManagerTicketEditComponent },

      { path: 'profile', component: ManagerProfileComponent },
      { path: 'profile/edit', component: ManagerProfileEditComponent }
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

export class ManagerRoutingModule { }
