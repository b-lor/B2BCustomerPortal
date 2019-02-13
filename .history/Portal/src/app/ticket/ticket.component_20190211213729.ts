import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { TicketService } from '../shared/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketInfo: any;
  constructor(private ticketService: TicketService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.ticketService.getTickets()
    .subscribe( res=> {
      console.log(res);
  this.ticketInfo = res;
      }, err=> {
        console.log(err);
      }
    );
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
