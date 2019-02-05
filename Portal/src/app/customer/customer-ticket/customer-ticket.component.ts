import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { TicketService } from '../../shared/ticket.service';
import { map } from 'rxjs/operators';
import { UserService } from '../../shared/user.service';
import { UserAdminService } from '../../shared/user-admin.service';


import { Ticket } from './../../shared/ticket.model';


@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.css']
})
export class CustomerTicketComponent implements OnInit {
  tickets: Ticket[];
  user: User;
  userID;

  constructor(private userAdminService: UserAdminService, private userService: UserService, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {

    const userSub = this.userAdminService.getUser(this.userService.getLoginId()).subscribe(user => {
      this.user = user;
      // console.log('selected id');
      // console.log(this.user._id);


      const ticketSub = this.ticketService.getCustomerTicket(this.user._id).subscribe(tickets => {
        this.tickets = tickets;
        // console.log('tickets');
        // console.log(tickets);

        ticketSub.unsubscribe();
      });

      userSub.unsubscribe();

    });
  }

}
