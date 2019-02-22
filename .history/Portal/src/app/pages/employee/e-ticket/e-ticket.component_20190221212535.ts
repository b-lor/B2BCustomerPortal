import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { UserModel, Ticket } from '../../../shared/models';
import {TicketService, UserService } from '../../../shared/services';


@Component({
  selector: 'app-e-ticket',
  templateUrl: './e-ticket.component.html',
  styleUrls: ['./e-ticket.component.css']
})
export class ETicketComponent implements OnInit, OnDestroy {

  tickets: Ticket[] = [];
  user: UserModel;
  userId;
  department = this.userService.getDepartment();

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['MM-dd-yyyy'];

  constructor(
    private userService: UserService,
    private ticketService: TicketService,
    private chRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25,
        dom: 'lBfrtip',
        buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
      };
      const ticketSub = this.ticketService
      .getTicketIssues()
      .subscribe(tickets => {
        this.tickets = tickets;
        this.chRef.detectChanges();
        this.dtTrigger.next();

        ticketSub.unsubscribe();
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
