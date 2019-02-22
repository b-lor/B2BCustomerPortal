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


    }

    generalIssues() {
      this.dashboardService.getGeneral().subscribe(
        res => {this.generals = res; }

        ,
        err => {}

      );
    }
  }

