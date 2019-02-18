import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ticket, UserModel } from '../../../shared/models';
import { TicketService, UserAdminService } from '../../../shared/services';
@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  tickets: Ticket;
  user: UserModel;
  ticketID;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService
  ) {
    this.route.params.subscribe(params => {
      this.ticketID = params['id'];
    });
  }

  ngOnInit() {
    const userTicket = this.ticketService
      .getTicket(this.ticketID)
      .subscribe(tickets => {
        this.tickets = tickets;
        userTicket.unsubscribe();
      });
  }
  onSubmit() {
    this.ticketService.updateTicket(this.tickets._id, this.tickets).subscribe(
      res => {
        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
      }
    );
  }
}
