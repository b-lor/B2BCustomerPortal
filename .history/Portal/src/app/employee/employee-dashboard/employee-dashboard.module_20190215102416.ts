import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { TimelineComponent, NotificationComponent, ChatComponent } from '../components';
import { StatModule } from '../../share';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    StatModule
  ]
})
export class EmployeeDashboardModule { }
