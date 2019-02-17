import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './';
// import { appRoutes } from 'src/app/routes';

@NgModule({
  declarations: [
    DashboardComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutes
  ]
})
export class DashboardModule { }
