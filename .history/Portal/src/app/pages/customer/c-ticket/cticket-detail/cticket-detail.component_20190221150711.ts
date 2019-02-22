import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ticket, UserModel, Tracker } from '../../../../shared/models';
import { TicketService, TrackerService, UserService } from '../../../../shared/services';


@Component({
  selector: 'app-cticket-detail',
  templateUrl: './cticket-detail.component.html',
  styleUrls: ['./cticket-detail.component.css']
})
export class CticketDetailComponent implements OnInit {

  tickets = new Ticket();
  trackers: Tracker[] = [];
  trackerDetails = new Tracker;
  user: UserModel;
  ticketId;
  ticketInfo: any;
  formatsDate: string[] = ['MM-dd-yyyy HH:mm'];


  userId = this.userService.getLoginId();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
console.log(trackers);
console.log('trackers');

          trackerSub.unsubscribe();
        });

        ticketSub.unsubscribe();
      });
  }

  onSubmit() {
    this.insertId(this.trackerDetails);

    this.trackerService.addTracker(this.trackerDetails).subscribe(res => {
      this.router.navigateByUrl('customer/ticket');

    },
      err => {
        console.log(err);
      }
    );
}


stringAsDate(dateStr: string) {
  return new Date(dateStr);
}

insertId(trackerDetails) {
  trackerDetails.user = this.userId;
  trackerDetails.ticket = this.tickets._id;
}

}
