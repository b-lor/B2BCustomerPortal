import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ticket-search-ticket-date-range',
  templateUrl: './admin-ticket-search-ticket-date-range.component.html',
  styleUrls: ['./admin-ticket-search-ticket-date-range.component.css']
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
