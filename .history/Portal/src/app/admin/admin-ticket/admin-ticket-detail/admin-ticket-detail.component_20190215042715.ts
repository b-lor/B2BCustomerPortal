import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

import { User } from '../../../shared/user.model.admin';
import { Transaction } from '../../../shared/transaction.model';
import { TransactionService } from '../../../shared/transaction.service';
import { UserAdminService } from '../../../shared/user-admin.service';


@Component({
  selector: 'app-admin-ticket-detail',
  templateUrl: './admin-ticket-detail.component.html',
  styleUrls: ['./admin-ticket-detail.component.css']
})
export class AdminTicketDetailComponent implements OnInit {
  tickets: Ticket;
  user: User;
  ticketId;
  ticketInfo: any;
  
    constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService, private userAdminService: UserAdminService) { 
      this.route.params.subscribe(params => {
        this.ticketId = params['id'];
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
  