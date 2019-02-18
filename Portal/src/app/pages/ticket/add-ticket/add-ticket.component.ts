import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../../shared/others';
import { Ticket } from '../../../shared/models';
import { UserService, TicketService } from '../../../shared/services';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css'],
  animations: [routerTransition()]
})
export class AddTicketComponent implements OnInit {
  ticket = new Ticket();
  userID = this.userService.getLoginId();
  emailID = this.userService.getEmail();

  constructor(
    private userService: UserService,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit() {}
  onSubmit() {
    this.insertID(this.ticket);
    this.ticketService.addTicket(this.ticket).subscribe(
      res => {
        console.log(res);

        this.router.navigateByUrl('dashboard');
      },
      err => {
        console.log(err);
      }
    );
  }

  insertID(ticket) {
    ticket.user = this.userID;
    ticket.submittedBy = this.emailID;
  }
}
