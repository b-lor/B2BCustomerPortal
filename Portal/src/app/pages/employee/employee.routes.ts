import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    EmployeeComponent,
    ETicketComponent,
    EdetailTicketComponent,
   } from './';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: EmployeeComponent
    },
    {
        path: 'ticket',
        component: ETicketComponent
    },
    {
        path: 'detail/:id',
        component: EdetailTicketComponent
    }
    ];

    @NgModule({
        imports: [RouterModule.forChild(appRoutes)],
        exports: [RouterModule],
        providers: []
      })
      export class EmployeeRoutes {}
