import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

import { User } from '../../../shared/user.model.admin';
import { Transaction } from '../../../shared/transaction.model';
import { TransactionService } from '../../../shared/transaction.service';
import { UserAdminService } from '../../../shared/user-admin.service';
import { DatePipe } from '@angular/common';

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

  formatsDate: string[] = [
    'MM-dd-yyyy',
    ];
  dt;

    constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService, private userAdminService: UserAdminService) { 
      this.route.params.subscribe(params => {
        this.ticketId = params['id'];
        this.dt = new Date();
      });

    }
  
    ngOnInit() {
      // const userSub = this.userAdminService.getUser(this.ticketId).subscribe(tickets => {
      //   this.tickets = tickets;
      //   console.log('tickets');
      //   console.log(tickets);
  
        const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
          this.tickets = tickets;
  
          ticketSub.unsubscribe();
        });
  
      //   userSub.unsubscribe();
      // })
    }
    checkDate() {
      const dateSendingToServer = new DatePipe('en-US').transform(this.tickets.dateSubmitted, 'dd/MM/yyyy')
      console.log(dateSendingToServer);
    }
    
  }
  