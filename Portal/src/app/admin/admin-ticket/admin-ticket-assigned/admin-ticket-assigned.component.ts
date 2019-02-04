import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

@Component({
  selector: 'app-admin-ticket-assigned',
  templateUrl: './admin-ticket-assigned.component.html',
  styleUrls: ['./admin-ticket-assigned.component.css']
})
export class AdminTicketAssignedComponent implements OnInit {

  ticket = new Ticket();

  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
    
  }
  onSubmit() {

    this.ticketService.addTicket(this.ticket).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('admin/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}
}
