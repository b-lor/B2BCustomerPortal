import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { TicketService } from '../shared/ticket.service';
import { Ticket } from '../shared/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketInfo: any;
  tickets: Ticket[];
  constructor(private ticketService: TicketService, private userService: UserService, private router: Router) { }

  columns = [
    { columnDef: '_id',    header: '_id',       cell: (row: Ticket) => `${row._id}`        },
    { columnDef: 'user',  header: 'user',     cell: (row: Ticket) => `${row.user}`      },
    { columnDef: 'ticketId',  header: 'ticketId', cell: (row: Ticket) => `${row.ticketId}` },
    { columnDef: 'issue',    header: 'issue',       cell: (row: Ticket) => `${row.issue}`        },
    { columnDef: 'description',  header: 'description',     cell: (row: Ticket) => `${row.description}`      },
    { columnDef: 'submittedBy',  header: 'submittedBy', cell: (row: Ticket) => `${row.submittedBy}` },
    { columnDef: 'resolution',    header: 'resolution',       cell: (row: Ticket) => `${row.resolution}`        },
    { columnDef: 'priority',  header: 'priority',     cell: (row: Ticket) => `${row.priority}`      },
    { columnDef: 'status',  header: 'status', cell: (row: Ticket) => `${row.status}` },
    { columnDef: 'dateSubmitted',  header: 'dateSubmitted',     cell: (row: Ticket) => `${row.dateSubmitted}`      },
    { columnDef: 'dateUpdate',  header: 'dateUpdate', cell: (row: Ticket) => `${row.dateUpdate}` },
  ];

  /** Column definitions in order */
  displayedColumns = this.columns.map(x => x.columnDef);


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
