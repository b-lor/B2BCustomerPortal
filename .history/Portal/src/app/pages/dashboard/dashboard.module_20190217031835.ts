import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    NgbCarouselModule,
    NgbAlertModule,
  ],
  imports: [CommonModule, DashboardRoutes]
})
export class DashboardModule {}
