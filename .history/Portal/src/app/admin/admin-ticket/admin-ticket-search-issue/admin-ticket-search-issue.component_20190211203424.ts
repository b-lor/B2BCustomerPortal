

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit {
  tickets: Ticket[];


    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient) {

     }



    ngOnInit() {
      this.ticketService.getTickets().subscribe( res => { this.tickets = res; },
        err => {
          console.log(err);
        }
      );
    }


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
