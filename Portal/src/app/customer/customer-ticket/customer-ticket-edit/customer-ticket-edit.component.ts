import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

@Component({
  selector: 'app-customer-ticket-edit',
  templateUrl: './customer-ticket-edit.component.html',
  styleUrls: ['./customer-ticket-edit.component.css']
})
export class CustomerTicketEditComponent implements OnInit {
  ticket = new Ticket();


  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }


  ngOnInit() {
    
  }
  onSubmit() {

    this.ticketService.addTicket(this.ticket).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('customer/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}
}