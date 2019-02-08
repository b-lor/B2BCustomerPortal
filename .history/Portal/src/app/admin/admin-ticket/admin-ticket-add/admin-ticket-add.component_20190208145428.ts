import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-admin-ticket-add',
  templateUrl: './admin-ticket-add.component.html',
  styleUrls: ['./admin-ticket-add.component.css'],
  animations: [routerTransition()]
})
export class AdminTicketAddComponent implements OnInit {
ticket = new Ticket();
userID = this.userService.getLoginId();
emailID = this.userService.getEmail();


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
    
  }
  onSubmit() {
this.insertID(this.ticket);
    this.ticketService.addTicket(this.ticket).subscribe(res => {
      console.log(res)
  
      this.router.navigateByUrl('admin/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}

insertID(ticket) {
  ticket.user = this.userID;
  ticket.submittedBy = this.emailID;
}
}
