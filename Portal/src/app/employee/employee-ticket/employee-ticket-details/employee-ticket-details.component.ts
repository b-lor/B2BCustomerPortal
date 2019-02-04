import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';

@Component({
  selector: 'app-employee-ticket-details',
  templateUrl: './employee-ticket-details.component.html',
  styleUrls: ['./employee-ticket-details.component.css']
})
export class EmployeeTicketDetailsComponent implements OnInit {
  ticket = new Ticket();


  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }


  ngOnInit() {
    
  }
  onSubmit() {

    this.ticketService.addTicket(this.ticket).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('employee/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}
}