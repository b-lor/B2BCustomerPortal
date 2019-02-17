import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutes]
})
export class DashboardModule {}
