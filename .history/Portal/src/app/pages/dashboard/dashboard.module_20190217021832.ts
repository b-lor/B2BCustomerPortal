import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './';
import { DashboardRoutes } from './dashboard.routes';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutes
    // RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
