import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';


@Component({
  selector: 'app-customer-ticket-add',
  templateUrl: './customer-ticket-add.component.html',
  styleUrls: ['./customer-ticket-add.component.css']
})
export class CustomerTicketAddComponent implements OnInit {
  ticket = new Ticket();
  userID = this.userService.getLoginId();

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }


  ngOnInit() {
    
  }
  onSubmit() {
    this.insertID(this.ticket);
    this.ticketService.addTicket(this.ticket).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('customer/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}

insertID(ticket){
  ticket.user = this.userID
}
}