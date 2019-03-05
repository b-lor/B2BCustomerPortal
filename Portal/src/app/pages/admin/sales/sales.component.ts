import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Sales } from '../../../shared/models';
import { SalesService } from '../../../shared/services';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  invoicesPerCustomer;
  invoicesAll;
  ordersPerCustomer;
  ordersAll;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.invoicesPerCustomerSales();
    this.invoicesAllSales();
    this.ordersPerCustomerSales();
    this.ordersAllSales();
  }

  invoicesPerCustomerSales() {
    this.salesService.getInvoicesPerCustomer().subscribe(
      res => {this.invoicesPerCustomer = res;
        // console.log('this.invoicesPerCustomer');
        // console.log(this.invoicesPerCustomer);
      }

      ,
      err => {}
    );
  }

  invoicesAllSales() {
    this.salesService.getInvoices().subscribe(
      res => {this.invoicesAll = res;
        // console.log('this.invoicesAll');
        // console.log(this.invoicesAll);
      }
      ,
      err => {}
    );
  }


  ordersPerCustomerSales() {
    this.salesService.getOrdersPerCustomer().subscribe(
      res => {this.ordersPerCustomer = res;
        // console.log('this.ordersPerCustomer');
        // console.log(this.ordersPerCustomer);
      }
      ,
      err => {}
    );
  }

  ordersAllSales() {
    this.salesService.getOrders().subscribe(
      res => {this.ordersAll = res;
        // console.log('this.ordersAll');
        // console.log(this.ordersAll);
      }
      ,
      err => {}
    );
  }


//////
}
