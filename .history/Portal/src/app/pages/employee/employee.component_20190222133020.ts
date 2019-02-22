import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../shared/others';

import { DashboardService } from '../../shared/services';
import { Ticket } from '../../shared/models';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  generals;
  billings;
  onlines;
  others;
  shippings;

  formatsDate: string[] = ['MM-dd-yyyy'];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
this.generalIssues();
this.billingIssues();
this.onlineIssues();
this.otherIssues();
this.shippingIssues();
    }

    generalIssues() {
      this.dashboardService.getGeneral().subscribe(
        res => {this.generals = res; }
        ,
        err => {}
      );
    }

    billingIssues() {
      this.dashboardService.getBilling().subscribe(
        res => {this.billings = res; }
        ,
        err => {}
      );
    }


    onlineIssues() {
      this.dashboardService.getOnline().subscribe(
        res => {this.onlines = res; }
        ,
        err => {}
      );
    }

    otherIssues() {
      this.dashboardService.getOther().subscribe(
        res => {this.others = res; }
        ,
        err => {}
      );
    }

    shippingIssues() {
      this.dashboardService.getShipping().subscribe(
        res => {this.shippings = res; }
        ,
        err => {}
      );
    }

  }

