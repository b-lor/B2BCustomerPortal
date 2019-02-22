import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    EmployeeComponent,
    ETicketComponent,
    EaddTicketComponent,
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
        path: 'add',
        component: EaddTicketComponent
    }
    ];

    @NgModule({
        imports: [RouterModule.forChild(appRoutes)],
        exports: [RouterModule],
        providers: []
      })
      export class EmployeeRoutes {}
