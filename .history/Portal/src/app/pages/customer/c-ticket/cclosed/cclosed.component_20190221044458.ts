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

  userId = this.userService.getLoginId();
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
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      dom: 'lBfrtip',
      buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
    };
    const ticketSub = this.ticketService.getCustomerTicket(this.userId).subscribe(tickets => {
      this.tickets = tickets;

ticketSub.unsubscribe();
  });
}



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

}
    }
