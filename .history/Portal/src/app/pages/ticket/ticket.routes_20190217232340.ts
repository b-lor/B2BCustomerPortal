import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './';
import { AddTicketComponent } from './';
import { ClosedComponent } from './';
import { DaterangeComponent } from './';
import { SearchComponent } from './';

export const appRoutes: Routes = [
    {
      path: '',
      component: TicketComponent
    },
    {
      path: 'add',
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
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
  })
  export class TicketRoutes {}
