import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    CustomerComponent,
    CTicketComponent,
    CaddTicketComponent,
    CclosedComponent,
    CdaterangeComponent,
    CsearchComponent,
    CticketDetailComponent,
    CticketEditComponent,
    CTransactionsComponent,
    CdetailComponent
   } from './';

export const appRoutes: Routes = [
    {
        path: '',
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
        path: 'daterange',
        component: CdaterangeComponent
    },
    {
        path: 'closed',
        component: CclosedComponent
    },
    {
        path: 'search',
        component: CsearchComponent
    },
    {
        path: 'detail/:id',
        component: CticketDetailComponent
    },
    {
        path: 'edit/:id',
        component: CticketEditComponent
    },
    {
        path: 'transactions',
        component: CTransactionsComponent
    },
    {
        path: 'transactions/:id',
        component: CdetailComponent
    },
    ];

    @NgModule({
        imports: [RouterModule.forChild(appRoutes)],
        exports: [RouterModule]
      })
      export class CustomerRoutes {}
