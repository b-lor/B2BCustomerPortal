import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './';
import { DashboardRoutes } from './dashboard.routes';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from '../../shared/components';
import { StatModule } from '../../shared/modules';

@NgModule({
  declarations: [
    DashboardComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    DashboardRoutes,
    StatModule
  ]
})
export class DashboardModule {}
