import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Trackers } from '../../../shared/trackers';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { Tracker } from '../../../shared/tracker.model';
import { TrackerService } from '../../../shared/tracker.service';

@Component({
  selector: 'app-customer-ticket-details',
  templateUrl: './customer-ticket-details.component.html',
  styleUrls: ['./customer-ticket-details.component.css']
})
export class CustomerTicketDetailsComponent implements OnInit {
  tickets: Ticket;
  ticketId;
  tracker: Tracker;

  trackers: Tracker[];

  constructor(private trackerService: TrackerService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { 
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];

//       console.log('this.ticketId');
// console.log(this.ticketId);


    });

  }
  ngOnInit() {

    const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
      this.tickets = tickets;
      // console.log('tickets');
      // console.log(this.tickets);

      const trackerSub = this.trackerService.getCustomerTracker(this.tickets._id).subscribe(trackers => {
        this.trackers = trackers;
        // console.log('trackers');
        // console.log(this.tickets._id);

        trackerSub.unsubscribe();
      });


      ticketSub.unsubscribe();
    });

  //   userSub.unsubscribe();
  // })





  
    //   const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
    //     this.tickets = tickets;
    //     console.log('tickets');
    //     console.log(tickets);

    //     ticketSub.unsubscribe();
    //   });

    // //   userSub.unsubscribe();
    // // })
  }
  
}