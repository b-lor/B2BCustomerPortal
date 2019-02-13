import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit {
  tickets: any[];
  datatable: any;
  filteredStatus = '';

  nameCount = 0;
  ageCount = 0;
  cityCount = 0;
  rowCount = 5;
  offset = 0;
  sortOptions = {};
  searchText = '';
  totalRowCount = 0;
  totalPages = 1;
  searchEmpty = true;
  currentPage = 1;

    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {

     }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {

    let filterOptions;

    if (this.searchText === '') {
      this.searchEmpty = true;
      filterOptions = {sortOptions: this.sortOptions, rowCount: +this.rowCount, offset: +this.offset, searchText: this.searchText};
    } else {
      this.searchEmpty = false;
      filterOptions = {sortOptions: this.sortOptions, rowCount: null, offset: 0, searchText: this.searchText};
    }

    this.ticketService.getTickets()
    .subscribe(( data: any[] ) => {
      this.tickets = data;
      this.totalRowCount = data().count;
      this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
      console.log('Fetched tickets');

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
        ],
        'scrollY': 500,
        'scrollX': true,
        'paging':   false,
        'searching': false
      });
      $('.dataTables_scrollHead thead th').each( function ( i ) {
        const select = $('<select><option value=""></option></select>')
            .appendTo( $(this).empty() )
            .on( 'change', function () {
                const val = $(this).val();

                table.column( i )
                    .search( val ? '^' + $(this).val() + '$' : val, true, false )
                    .draw();
            } );

        table.column( i ).data().unique().sort().each( function ( d, j ) {
            select.append( '<option value="' + d + '">' + d + '</option>' );
        } );

    });
  });


  }

  getStatusClasses(ticket: {issue: string}) {
    return {
      'list-group-item-success': ticket.issue === 'General',
      'list-group-item-warning': ticket.issue === 'Billing',
      'list-group-item-danger': ticket.issue === 'Shipping',
      'list-group-item-light': ticket.issue === 'Online',
      'list-group-item-dark': ticket.issue === 'Other'
    };
  }

//////////////////////////////////////////////////

// import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { Ticket } from '../../../shared/ticket.model';
// import { SearchService } from '../../../shared/search.service';
// import { TicketService } from '../../../shared/ticket.service';
// import { Subscription } from 'rxjs/Subscription';
// import { HttpClient } from '@angular/common/http';


// import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-buttons-dt';
// import 'datatables.net-bs4';
// import 'datatables.net-buttons';
// import 'datatables.net-buttons/js/buttons.flash';
// import 'datatables.net-buttons/js/buttons.html5';
// import 'datatables.net-buttons/js/buttons.print';
// // import '~bootstrap/dist/css/bootstrap.css';
// // import '~datatables.net-bs4/css/dataTables.bootstrap4.css';

// @Component({
//   selector: 'app-admin-ticket-search-issue',
//   templateUrl: './admin-ticket-search-issue.component.html',
//   styleUrls: ['./admin-ticket-search-issue.component.css']
// })
// export class AdminTicketSearchIssueComponent implements OnInit {
//   tickets: any[];
//   datatable: any;

//     constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {

//      }

//   ngOnInit() {
//     this.getTickets();
//   }

//   getTickets() {
//     this.ticketService.getTickets()
//     .subscribe(( data: any[] ) => {
//       this.tickets = data;
//       // tslint:disable-next-line:no-unused-expression
//       (err) => {
//                console.error(err);
//             }
//       ;

//      // this.chRef.detectChanges();
//       const table: any = $('table');
//       this.datatable = table.DataTable({
//         buttons: [
//           'copyHtml5', 'csvHtml5', 'copy', 'excel', 'pdf'
//         ]
//       });


//     });
//   }


//   }




}
