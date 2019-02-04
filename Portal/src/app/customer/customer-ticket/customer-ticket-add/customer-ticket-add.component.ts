import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';


@Component({
  selector: 'app-customer-ticket-add',
  templateUrl: './customer-ticket-add.component.html',
  styleUrls: ['./customer-ticket-add.component.css']
})
export class CustomerTicketAddComponent implements OnInit {
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