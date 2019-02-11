import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../../shared/ticket.model';
// import { SearchService } from '../../../../shared/search.service';
import { TicketService } from '../../../../shared/ticket.service';

@Component({
  selector: 'app-search-issue',
  templateUrl: './search-issue.component.html',
  styleUrls: ['./search-issue.component.css']
})
export class SearchIssueComponent implements OnInit {

  tickets: Ticket[];

selected: Ticket;
filter = {issue: 'all'};
  
  constructor(private ticketService: TicketService, private router: Router) {

   }  
   


  ngOnInit() {
    this.ticketService.getTickets()
    .subscribe( res => {
      console.log(res);
  this.tickets = res;
      }, err => {
        console.log(err);
      }
    );
  }

  select(item: Ticket) {
    this.selected = item;
   }

}
