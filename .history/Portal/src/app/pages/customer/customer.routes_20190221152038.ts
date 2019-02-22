import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    CustomerComponent,
    CTicketComponent,
    CaddTicketComponent,
    CticketDetailComponent,
    CTransactionsComponent,
    CdetailComponent,
    CsalesComponent,
    CunpaidComponent,
    CpaidComponent
   } from './';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: CustomerComponent
    },
    {
        path: 'ticket',
        component: CTicketComponent
    },
    {
        path: 'add',
        component: CaddTicketComponent
    },
    {
        path: 'detail/:id',
        component: CticketDetailComponent
    },
    {
        path: 'transactions',
        component: CTransactionsComponent
    },
    {
        path: 'transactions/paid/:id',
        component: CpaidComponent,
    },
    {
        path: 'transactions/unpaid/:id',
        component: CunpaidComponent
    },
    {
        path: 'transactions/openorders/:id',
        component: CsalesComponent
    },
    {
        path: 'transactions/:id',
        component: CdetailComponent
    },
    ];

    @NgModule({
        imports: [RouterModule.forChild(appRoutes)],
        exports: [RouterModule],
        providers: []
      })
      export class CustomerRoutes {}
