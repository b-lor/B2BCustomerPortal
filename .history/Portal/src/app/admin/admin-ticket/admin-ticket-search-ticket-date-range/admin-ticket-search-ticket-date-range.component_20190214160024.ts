import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SearchService } from '../../../shared/search.service';

@Component({
  selector: 'app-admin-ticket-search-ticket-date-range',
  templateUrl: './admin-ticket-search-ticket-date-range.component.html',
  styleUrls: ['./admin-ticket-search-ticket-date-range.component.css']
})
export class AdminTicketSearchTicketDateRangeComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.searchService.searchDate(form.value).subscribe(
      res => {
       console.log('res');
       console.log(res);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong. Please contact the Admin.';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.searchService.selectedDate = {
      fromDate: null,
      toDate: null,
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }



}
