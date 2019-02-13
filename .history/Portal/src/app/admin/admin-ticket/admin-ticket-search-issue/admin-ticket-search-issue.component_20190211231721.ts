

import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons-dt';
import 'datatables.net-bs4';
import 'jszip';
import 'pdfmake';
import 'datatables.net-dt';
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-colreorder-dt';
import 'datatables.net-fixedcolumns-dt';
// import 'datatables.net-fixedheader-dt';
import 'datatables.net-keytable-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-rowgroup-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-scroller-dt';
import 'datatables.net-select-dt';
// import '~bootstrap/dist/css/bootstrap.css';
// import '~datatables.net-bs4/css/dataTables.bootstrap4.css';

@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit {
  tickets: any[];
  datatable: any;

    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {

     }

       /** Table columns */
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


  //////

  ngOnInit() {
    this.getTickets();
  }




  getTickets() {
    this.ticketService.getTickets()
    .subscribe(( data: any[] ) => {
      this.tickets = data;
      // tslint:disable-next-line:no-unused-expression
      (err) => {
               console.error(err);
            }
      ;

     // this.chRef.detectChanges();
      const table: any = $('table');
      this.datatable = table.DataTable({
        buttons: [
          'copyHtml5', 'csvHtml5', 'copy', 'excel', 'pdf'
        ]
      });


    });
  }


  }


//     import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { Ticket } from '../../../shared/ticket.model';
// import { SearchService } from '../../../shared/search.service';
// import { TicketService } from '../../../shared/ticket.service';

// @Component({
//   selector: 'app-admin-ticket-search-issue',
//   templateUrl: './admin-ticket-search-issue.component.html',
//   styleUrls: ['./admin-ticket-search-issue.component.css']
// })
// export class AdminTicketSearchIssueComponent implements OnInit {
//   tickets: Ticket[];

//   selected: Ticket;
//   filter = {issue: 'all'};

//     constructor(private ticketService: TicketService, private router: Router, private searchService: SearchService) {

//      }



//     ngOnInit() {
//       this.ticketService.getTickets()
//       .subscribe( res => {
//         console.log(res);
//     this.tickets = res;
//         }, err => {
//           console.log(err);
//         }
//       );
//     }

//     select(item: Ticket) {
//       this.selected = item;
//      }
//     }
