import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './';


@NgModule({
  declarations: [
    DashboardComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
