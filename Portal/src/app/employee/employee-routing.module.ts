import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { EmployeeGuard } from '../auth/employee.guard';

import { EmployeeComponent } from './employee.component';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile/employee-profile-edit/employee-profile-edit.component';

import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { EmployeeTicketAddComponent } from './employee-ticket/employee-ticket-add/employee-ticket-add.component';
import { EmployeeTicketDetailsComponent } from './employee-ticket/employee-ticket-details/employee-ticket-details.component';
import { EmployeeTicketEditComponent } from './employee-ticket/employee-ticket-edit/employee-ticket-edit.component';

import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const routes: Routes = [

  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard, EmployeeGuard],
    children: [
      { path: '', component: EmployeeDashboardComponent },

      { path: 'ticket', component: EmployeeTicketComponent },
      { path: 'ticket/add', component: EmployeeTicketAddComponent },
      { path: 'ticket/detail/:id', component: EmployeeTicketDetailsComponent },
      { path: 'ticket/edit/:id', component: EmployeeTicketEditComponent },

      { path: 'login', component: EmployeeLoginComponent },

      { path: 'profile', component: EmployeeProfileComponent },
      { path: 'profile/edit', component: EmployeeProfileEditComponent }
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

export class EmployeeRoutingModule { }
