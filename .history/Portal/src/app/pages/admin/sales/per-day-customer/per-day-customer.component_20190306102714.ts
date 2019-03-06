import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

import { Sales } from '../../../../shared/models';
import { SalesService } from '../../../../shared/services';


@Component({
  selector: 'app-per-day-customer',
  templateUrl: './per-day-customer.component.html',
  styleUrls: ['./per-day-customer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerDayCustomerComponent implements OnInit {

chart = [];
invoicesPerCustomer;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getInvoicesPerCustomer().subscribe(
      res => {this.invoicesPerCustomer = res;
        console.log('this.invoicesPerCustomer');
        console.log(this.invoicesPerCustomer);
      }

      ,
      err => {}
    );
  }
  }


}
