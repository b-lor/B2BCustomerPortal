import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { DataTableDirective, DataTablesModule  } from 'angular-datatables';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { Router } from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit, AfterViewInit {
  tickets: Ticket[];
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  constructor(private ticketService: TicketService, private router: Router, private http: HttpClient) {

  }
  ngOnInit() {
      const ticketSub = this.ticketService.getTickets().subscribe(tickets => {
        this.dtOptions  = tickets;
        // console.log('transactions');
        // console.log(this.user._id);

        ticketSub.unsubscribe();
      });

  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }








//     import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { Ticket } from '../../../shared/ticket.model';
// import { SearchService } from '../../../shared/search.service';
// import { TicketService } from '../../../shared/ticket.service';

// @Component({
//   selector: 'app-admin-ticket-search-issue',
//   templateUrl: './admin-ticket-search-issue.component.html',
//   styleUrls: ['./admin-ticket-search-issue.component.css']
// })
// export class AdminTicketSearchIssueComponent implements OnInit {
//   tickets: Ticket[];

//   selected: Ticket;
//   filter = {issue: 'all'};

//     constructor(private ticketService: TicketService, private router: Router, private searchService: SearchService) {

//      }



//     ngOnInit() {
//       this.ticketService.getTickets()
//       .subscribe( res => {
//         console.log(res);
//     this.tickets = res;
//         }, err => {
//           console.log(err);
//         }
//       );
//     }

//     select(item: Ticket) {
//       this.selected = item;
//      }
//     }





}
