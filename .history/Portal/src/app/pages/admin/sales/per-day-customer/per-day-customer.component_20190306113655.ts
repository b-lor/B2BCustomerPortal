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
      //  const customer =  res[0].map(res => res._id.customer);
       const alldates = this.invoicesPerCustomer[1]._id.date;
       const total = this.invoicesPerCustomer[1]._id.total;
console.log('alldates');
console.log(alldates);

// console.log('total');
// console.log(total);

        // this.invoicesPerCustomer = res;
        // console.log('this.invoicesPerCustomer');
        // console.log(res);

this.chart = new Chart('canvas', {
  type: 'line',
  data: {
    labels: alldates,
    datasets: [
      {
        data: [100],
        borderColor: '#3cba9f',
        fill: false
      }
    ]
  },
options: {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: true
    }],
    yAxes: [{
      display: true
    }]
  }
}

});


      });
  }


////////
  }



