
import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { Http, Headers, RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit {

  tickets: any;
  // tickets = [];
  nameCount = 0;
  ageCount = 0;
  cityCount = 0;
  rowCount = 25;
  offset = 0;
  sortOptions = {};
  searchText = '';
  totalRowCount = 1200;
  totalPages = 1;
  searchEmpty = true;
  currentPage = 1;

    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {
      this.getTickets();
     }

  ngOnInit() {
    // this.getTickets();
  }



  getTickets() {

    let filterOptions;

    if (this.searchText === '') {
      this.searchEmpty = true;
      filterOptions = {sortOptions: this.sortOptions, rowCount: +this.rowCount, offset: +this.offset, searchText: this.searchText};
    } else {
      this.searchEmpty = false;
      filterOptions = {sortOptions: this.sortOptions, rowCount: null, offset: 0, searchText: this.searchText};
    }



    this.http.post(environment.apiBaseUrl + '/filter', JSON.stringify(filterOptions), httpOptions)

    .subscribe( res => {
      this.tickets = res;
      this.tickets = Array.of(this.tickets);
      this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
      console.log('Fetched Tickets');
      console.log(this.tickets);
    },
      err => {
        console.log('Error fetching tickets');
      }
    );
  }

  changeOffset(offset, event) {

    event.target.parentNode.parentNode.childNodes.forEach((node) => {
      node.className = '';
    });
    event.target.parentNode.className = 'active';
    this.offset = (offset - 1) * this.rowCount;
    this.currentPage = offset;
    this.getTickets();

  }

  changeRowCount() {

    this.currentPage = 1;
    this.offset = 0;
    this.getTickets();

  }

  toggleResolutionOrder(event) {

    console.log(event.target.childNodes[1]);
    console.log('event.target.childNodes[1]');
    this.nameCount++;
    const rem = this.nameCount % 3;

    if (rem === 0) {
      delete this.sortOptions['resolution'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['resolution'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['resolution'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  toggleTicketIdOrder(event) {

    this.ageCount++;
    const rem = this.ageCount % 3;

    if (rem === 0) {
      delete this.sortOptions['ticketId'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['ticketId'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['ticketId'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  toggleStatusOrder(event) {

    this.cityCount++;
    const rem = this.cityCount % 3;

    if (rem === 0) {
      delete this.sortOptions['status'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['status'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['status'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  getNumber(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

}

