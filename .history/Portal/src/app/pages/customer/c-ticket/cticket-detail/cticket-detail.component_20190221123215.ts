import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Ticket, UserModel, Tracker } from '../../../../shared/models';
import { TicketService, TrackerService, UserService } from '../../../../shared/services';


@Component({
  selector: 'app-cticket-detail',
  templateUrl: './cticket-detail.component.html',
  styleUrls: ['./cticket-detail.component.css']
})
export class CticketDetailComponent implements OnInit {

  tickets = new Ticket();
  trackers = new Tracker();
  user: UserModel;
  ticketId;
  ticketInfo: any;
  formatsDate: string[] = ['dd-MM-yyyy'];

  userId = this.userService.getLoginId();

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private trackerService: TrackerService,
    private userService: UserService
  ) {
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];
    });
  }

  ngOnInit() {
    const ticketSub = this.ticketService
      .getTicket(this.ticketId)
      .subscribe(tickets => {
        this.tickets = tickets;

        const trackerSub = this.trackerService.getCustomerTracker(this.tickets._id).subscribe(trackers => {
          this.trackers = trackers;

          trackerSub.unsubscribe();
        });

        ticketSub.unsubscribe();
      });
  }

  onSubmit() {
    this.insertId(this.trackers);

    this.trackerService.addTracker(this.trackers).subscribe(res => {
      console.log(res);
      console.log('res');

    },
      err => {
        console.log(err);
      }
    );
}

insertId(trackers) {
  trackers.user = this.userId;
  trackers.ticket = this.tickets._id;
}

}
