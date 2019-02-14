import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ticket-search-ticket-date-range',
  styleUrls: ['./admin-ticket-search-ticket-date-range.component.css'],
  templateUrl: `
  <date-range-picker class="col-md-4" [options]="daterangepickerOptions" class="col-md-4">
  </date-range-picker>`
})
export class AdminTicketSearchTicketDateRangeComponent implements OnInit {
  daterangepickerOptions = {
    startDate: '09/01/2017',
    endDate: '09/02/2017',
    format: 'DD/MM/YYYY'
};


  constructor() { }

  ngOnInit() {
  }

}
