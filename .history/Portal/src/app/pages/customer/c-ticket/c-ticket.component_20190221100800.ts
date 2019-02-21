import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import {
  UserService,
  UserAdminService,
  TransactionService,
  TicketService
} from '../../../shared/services';
import { UserModel, Ticket } from '../../../shared/models';


@Component({
  selector: 'app-c-ticket',
  templateUrl: './c-ticket.component.html',
  styleUrls: ['./c-ticket.component.css']
})
export class CTicketComponent implements OnInit, OnDestroy {

  user: UserModel;
  tickets: Ticket[] = [];
  userId;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['MM-dd-yyyy'];

  constructor(
    private userService: UserService,
    private ticketService: TicketService,
    private userAdminService: UserAdminService,
    private chRef: ChangeDetectorRef) { }

    ngOnInit(): void {
      const userSub = this.userAdminService
        .getUser(this.userService.getLoginId())
        .subscribe(user => {
          this.user = user;
          this.pulldata();
            this.chRef.detectChanges();
            this.dtTrigger.next();
  
          userSub.unsubscribe();
        });
    }
  


    pulldata(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25,
        dom: 'lBfrtip',
        buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
      };
          const ticketSub = this.ticketService
            .getCustomerTicket(this.user._id)
            .subscribe(tickets => {
              this.tickets = tickets;
              ticketSub.unsubscribe();
            });
    }
    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  
  }
  }