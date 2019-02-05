import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

@Component({
  selector: 'app-customer-ticket-details',
  templateUrl: './customer-ticket-details.component.html',
  styleUrls: ['./customer-ticket-details.component.css']
})
export class CustomerTicketDetailsComponent implements OnInit {
  tickets: Ticket;
  ticketId;

  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { 
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];

//       console.log('this.ticketId');
// console.log(this.ticketId);


    });

  }
  ngOnInit() {
          // const userSub = this.userAdminService.getUser(this.ticketId).subscribe(tickets => {
      //   this.tickets = tickets;
      //   console.log('tickets');
      //   console.log(tickets);
  
      const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
        this.tickets = tickets;
        console.log('tickets');
        console.log(tickets);

        ticketSub.unsubscribe();
      });

    //   userSub.unsubscribe();
    // })
  }
  
}