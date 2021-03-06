import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Ticket, UserModel } from '../../../../shared/models';
import { TicketService, UserAdminService } from '../../../../shared/services';


@Component({
  selector: 'app-cticket-detail',
  templateUrl: './cticket-detail.component.html',
  styleUrls: ['./cticket-detail.component.css']
})
export class CticketDetailComponent implements OnInit {

  tickets = new Ticket();
  user: UserModel;
  ticketId;
  ticketInfo: any;
  formatsDate: string[] = ['dd-MM-yyyy'];
  dt;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];
      this.dt = new Date();
    });
  }

  ngOnInit() {
    const ticketSub = this.ticketService
      .getTicket(this.ticketId)
      .subscribe(tickets => {
        this.tickets = tickets;

        ticketSub.unsubscribe();
      });
  }
  checkDate() {
    const dateSendingToServer = new DatePipe('en-US').transform(
      this.tickets.dateSubmitted,
      'dd/MM/yyyy'
    );
    console.log(dateSendingToServer);
  }
}
