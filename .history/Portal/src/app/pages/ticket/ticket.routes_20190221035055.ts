import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './';
import { AddTicketComponent } from './';
import { ClosedComponent } from './';
import { DaterangeComponent } from './';
import { SearchComponent } from './';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

export const appRoutes: Routes = [
    {
      path: '',
      component: TicketComponent
    },
    {
      path: '/ticket/add',
      component: AddTicketComponent
    },
    {
      path: 'closed',
      component: ClosedComponent
    },
    {
      path: 'daterange',
      component: DaterangeComponent
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: 'detail/:id',
      component: TicketDetailComponent
    },
    {
      path: 'edit/:id',
      component: TicketEditComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
  })
  export class TicketRoutes {}
