import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    EmployeeComponent,
    EticketComponent,
    EaddTicketComponent
} from './';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: EmployeeComponent
    },
    {
        path: 'add',
        component: EaddTicketComponent
    },
    {
        path: 'ticket',
        component: EticketComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    providers: []
  })
  export class EmployeeRoutes {}

