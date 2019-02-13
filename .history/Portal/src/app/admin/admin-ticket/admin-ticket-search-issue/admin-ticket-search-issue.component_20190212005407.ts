
import { Component, OnInit, Pipe, PipeTransform, Inject, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
export class AdminTicketSearchIssueComponent implements OnInit {
  dtOptions: Promise<DataTables.Settings>;


  tickets: any[];
  datatable: any;



    constructor(@Inject(Http) private http: Http, private ticketService: TicketService, private router: Router) {

     }

     ngOnInit(): void {
      this.dtOptions = this.http.get('http://localhost:3000/api/ticket')
        .toPromise()
        .then((response) => response.json())
        .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
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
  //       buttons: [
  //         'copyHtml5', 'csvHtml5', 'copy', 'excel', 'pdf'
  //       ]
  //     });


  //   });




  







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