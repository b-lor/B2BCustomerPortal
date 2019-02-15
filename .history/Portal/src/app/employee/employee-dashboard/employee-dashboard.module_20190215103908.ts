import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { StatModule } from '../../share';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,

  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    StatModule
  ]
})
export class EmployeeDashboardModule { }
