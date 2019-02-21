import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import {
  TicketService,
  UserService,
  TrackerService,
  UserAdminService
 } from '../../../../shared/services';

 import {
   Ticket,
   Tracker,
   UserModel
 } from '../../../../shared/models';

@Component({
  selector: 'app-cclosed',
  templateUrl: './cclosed.component.html',
  styleUrls: ['./cclosed.component.css']
})
export class CclosedComponent implements OnInit, OnDestroy {
  trackers: Tracker[];
  tickets: Ticket;
  ticketId;
  userId = this.userService.getLoginId();

trackerDetails = new Tracker();
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['dd-MM-yyyy'];

  constructor(
    private ticketService: TicketService,
    private trackerService: TrackerService,
    private chRef: ChangeDetectorRef,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private userAdminService: UserAdminService
    ) {
      this.route.params.subscribe(params => {
        this.ticketId = params['id'];
      });
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      dom: 'lBfrtip',
      buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
    };
    const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
      this.tickets = tickets;
      console.log('tickets');
      console.log(tickets);

      const trackerSub = this.trackerService.getCustomerTracker(this.tickets._id).subscribe(trackers => {
        this.trackers = trackers;
        console.log('trackers');
        console.log(trackers);

        this.chRef.detectChanges();
        this.dtTrigger.next();
        trackerSub.unsubscribe();
      });


      ticketSub.unsubscribe();
    });


  }

  onSubmit() {
    this.insertUserID(this.trackerDetails);
    this.insertTicketID(this.trackerDetails);

    // this.trackerUpdate();

    // this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
    //   console.log(res)
    this.trackerService.addTracker(this.trackerDetails).subscribe(res => {
      console.log(res);

      location.reload();

      // this.router.navigateByUrl('customer/ticket');

    },
      err => {
        console.log(err);
      }
    );
}

insertUserID(trackerDetails) {
  trackerDetails.user = this.userId;
}
insertTicketID(trackerDetails) {
  trackerDetails.ticket = this.tickets._id;
}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

}
    }
