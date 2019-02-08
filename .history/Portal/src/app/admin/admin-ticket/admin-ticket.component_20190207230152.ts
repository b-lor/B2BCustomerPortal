import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { TicketService } from '../../shared/ticket.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.scss']
})
export class AdminTicketComponent implements OnInit {
ticketInfo: any;

  constructor(private router: Router, private ticketService: TicketService) { }

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
  deleteTicket(id) {
    console.log('del clicked' + id);

    this.ticketService.deleteTicket(id).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('admin/ticket');
    },
      err => {
        console.log(err);
        this.router.navigateByUrl('admin');
      }
    );

}
}
