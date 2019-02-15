import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

@Component({
  selector: 'app-employee-ticket-edit',
  templateUrl: './employee-ticket-edit.component.html',
  styleUrls: ['./employee-ticket-edit.component.css']
})
export class EmployeeTicketEditComponent implements OnInit {
  ticket: Ticket;

  ticketID;
  
    constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) {
      this.route.params.subscribe(params => {
        this.ticketID = params['id'];
      });
     }
  
    ngOnInit() {
      const userTicket = this.ticketService.getTicket(this.ticketID).subscribe(ticket => {
  this.ticket = ticket;

  console.log(ticket);

  userTicket.unsubscribe();
})
}
onSubmit() {

  this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
    console.log(res)

    this.router.navigateByUrl('employee/ticket');

  },
    err => {
      console.log(err);
    }
  );
}
}
