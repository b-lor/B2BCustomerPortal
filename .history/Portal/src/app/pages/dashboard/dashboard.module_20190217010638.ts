import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { dashboard_routes } from './dashboard.routes';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboard_routes)
  ]
})
export class DashboardModule { }
