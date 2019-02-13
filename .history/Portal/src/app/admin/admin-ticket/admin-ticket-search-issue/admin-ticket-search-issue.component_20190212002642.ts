

import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons-dt';
import 'datatables.net-bs4';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
// import '~bootstrap/dist/css/bootstrap.css';
// import '~datatables.net-bs4/css/dataTables.bootstrap4.css';

@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit, AfterViewInit  {
  tickets: any[];
  datatable: any;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {

     }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'localhost:3000/api/ticket/',
        type: 'POST'
      },
      columns: [
          {data: '_id', title: 'ID;'},
          {data: 'resolution', title: 'resolution'},
          {data: 'status', title: 'status'},

      ],
      processing: true,
      serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
}


  // getTickets() {
  //   this.ticketService.getTickets()
  //   .subscribe(( data: any[] ) => {
  //     this.tickets = data;
  //     // tslint:disable-next-line:no-unused-expression
  //     (err) => {
  //              console.error(err);
  //           }
  //     ;

  //    // this.chRef.detectChanges();
  //     const table: any = $('table');
  //     this.datatable = table.DataTable({
  //       'destroy': true,
  //       'paging': true,
  //       'info': true,
  //       'autoWidth': true,
  //       'responsive': true,
  //       scrollY: '600',
  //       buttons: [
  //         'copyHtml5', 'csvHtml5', 'copy', 'excel', 'pdf'
  //       ]
  //     });

  //     table.buttons().container()
  //     .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );
  //   });
  // }


  







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