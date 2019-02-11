import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../../shared/ticket.model';
import { SearchService } from '../../../../shared/search.service';
import { TicketService } from '../../../../shared/ticket.service';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { IssuePipe } from '../../../../pipes/issue.pipe';

@Component({
  selector: 'app-search-issue',
  templateUrl: './search-issue.component.html',
  styleUrls: ['./search-issue.component.css'],
  providers: [ IssuePipe ]
})
export class SearchIssueComponent implements OnInit {

  tickets: Ticket[];

selected: Ticket;
filter = {issue: 'all'};
  
  constructor(private issuePipe: IssuePipe, private ticketService: TicketService, private router: Router, private searchService: SearchService) {

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
