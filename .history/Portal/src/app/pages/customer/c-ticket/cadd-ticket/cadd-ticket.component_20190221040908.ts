import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ticket } from '../../../../shared/models';
import { UserService, TicketService } from '../../../../shared/services';


@Component({
  selector: 'app-cadd-ticket',
  templateUrl: './cadd-ticket.component.html',
  styleUrls: ['./cadd-ticket.component.css']
})
export class CaddTicketComponent implements OnInit {
  ticket = new Ticket();
  userId = this.userService.getLoginId();
  constructor(private userService: UserService, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.insertID(this.ticket);
    this.ticketService.addTicket(this.ticket).subscribe(res => {
      this.router.navigateByUrl('customer/ticket');
    },
      err => {
        console.log(err);
      }
    );
}

insertID(ticket) {
  ticket.user = this.userId;
}
}

}
