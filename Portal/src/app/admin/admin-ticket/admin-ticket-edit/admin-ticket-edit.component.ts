import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

import { User } from '../../../shared/user.model.admin';
import { UserAdminService } from '../../../shared/user-admin.service';


@Component({
  selector: 'app-admin-ticket-edit',
  templateUrl: './admin-ticket-edit.component.html',
  styleUrls: ['./admin-ticket-edit.component.css']
})
export class AdminTicketEditComponent implements OnInit {
  ticket: Ticket;
  user: User;
  ticketID;

    constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService, private userAdminService: UserAdminService) {
      this.route.params.subscribe(params => {
        this.ticketID = params['id'];
      });
     }
  
    ngOnInit() {
          const userTicket = this.ticketService.getTicket(this.ticketID).subscribe(ticket => {
      this.ticket = ticket;

      console.log(ticket);

      userTicket.unsubscribe();
    })
    }
    onSubmit() {
  
      this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
        console.log(res)
    
        this.router.navigateByUrl('admin/ticket');
    
      },
        err => {
          console.log(err);
        }
      );
  }
  }
  