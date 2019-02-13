
import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Ticket } from '../../../shared/ticket.model';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
// import { Http, Headers, RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit {

  tickets: any;
  // tickets = [];
  nameCount = 0;
  ageCount = 0;
  cityCount = 0;
  rowCount = 5;
  offset = 0;
  sortOptions = {};
  searchText = '';
  totalRowCount = 1200;
  totalPages = 1;
  searchEmpty = true;
  currentPage = 1;

    constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {
      this.getTickets();
     }

  ngOnInit() {
    // this.getTickets();
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


    // console.log('Filter Options: ');
    // console.log(filterOptions);

    // filterIssues() {
    //   return this.http.post(environment.apiBaseUrl + '/filter', this.noAuthHeader).pipe(map((response: any) =>
    //     response.map(transaction => new Ticket().deserialize(transaction)))
    //   );

      this.http.post(environment.apiBaseUrl + '/filter', JSON.stringify(filterOptions), httpOptions)
    // this.ticketService.filterIssues()
    .subscribe( res => {
      this.tickets = res;
      this.tickets = Array.of(this.tickets);
      // this.totalRowCount = data.json().count;
      this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
      // console.log('Fetched Employees');
      // console.log(res);
    },
      err => {
        console.log('Error fetching employees');
      }
    );

    // Making the HTTP request to save post to MongoDB
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // const headers = new RequestOptions({'Content-Type': 'application/json'});
    // this.http.post('localhost:3000/filter', JSON.stringify(filterOptions), httpOptions)
    // .subscribe( res => {
    //   this.tickets = res;
    //   console.log('tickets');
    //   console.log(this.tickets);
    //   this.totalRowCount = this.tickets.length;
    //   console.log('total row');
    //   console.log(this.totalRowCount);
    //   this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
    //   console.log('Fetched');
    // }, (err) => {
    //   console.log('Error fetching');
    // });

  }

  changeOffset(offset, event) {

    event.target.parentNode.parentNode.childNodes.forEach((node) => {
      node.className = '';
    });
    event.target.parentNode.className = 'active';
    this.offset = (offset - 1) * this.rowCount;
    this.currentPage = offset;
    this.getTickets();

  }

  changeRowCount() {

    this.currentPage = 1;
    this.offset = 0;
    this.getTickets();

  }

  toggleResolutionOrder(event) {

    console.log(event.target.childNodes[1]);
    console.log('event.target.childNodes[1]');
    this.nameCount++;
    const rem = this.nameCount % 3;

    if (rem === 0) {
      delete this.sortOptions['resolution'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['resolution'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['resolution'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  toggleTicketIdOrder(event) {

    this.ageCount++;
    const rem = this.ageCount % 3;

    if (rem === 0) {
      delete this.sortOptions['ticketId'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['ticketId'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['ticketId'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  toggleStatusOrder(event) {

    this.cityCount++;
    const rem = this.cityCount % 3;

    if (rem === 0) {
      delete this.sortOptions['status'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['status'] = 1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['status'] = -1;
      event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
    }

    this.getTickets();

  }

  getNumber(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

}




// import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { Ticket } from '../../../shared/ticket.model';
// import { SearchService } from '../../../shared/search.service';
// import { TicketService } from '../../../shared/ticket.service';
// import { Subscription } from 'rxjs/Subscription';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

// @Component({
//   selector: 'app-admin-ticket-search-issue',
//   templateUrl: './admin-ticket-search-issue.component.html',
//   styleUrls: ['./admin-ticket-search-issue.component.css']
// })
// export class AdminTicketSearchIssueComponent implements OnInit {

//   // tickets: any;
//   tickets = [];
//   nameCount = 0;
//   ageCount = 0;
//   cityCount = 0;
//   rowCount = 5;
//   offset = 0;
//   sortOptions = {};
//   searchText = '';
//   totalRowCount = 0;
//   totalPages = 1;
//   searchEmpty = true;
//   currentPage = 1;

// tslint:disable-next-line:max-line-length
//     constructor(private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {
//       this.getTickets();
//      }

//   ngOnInit() {
//     // this.getTickets();
//   }

//   private userData(res: Response) {
//     const body = res;
//     return body || { };
//   }

//   getTickets() {

//     let filterOptions;

//     if (this.searchText === '') {
//       this.searchEmpty = true;
//       filterOptions = {sortOptions: this.sortOptions, rowCount: +this.rowCount, offset: +this.offset, searchText: this.searchText};
//     } else {
//       this.searchEmpty = false;
//       filterOptions = {sortOptions: this.sortOptions, rowCount: null, offset: 0, searchText: this.searchText};
//     }


//     console.log('Filter Options: ');
//     console.log(filterOptions);

//     // getTicketIssues() {
//     //   return this.http.post(environment.apiBaseUrl + '/ticket/filter', this.noAuthHeader).pipe(map((response: any) =>
//     //     response.map(transaction => new Ticket().deserialize(transaction)))
//     //   );
//     // }
//     // }
//     // this.ticketService.getTicketIssues().subscribe( res=> { this.ticketInfo = res; },
//     //   err=> {
//     //     console.log(err);
//     //   }
//     // );

//     // Making the HTTP request to save post to MongoDB
//     // const headers = new HttpHeaders({'Content-Type': 'application/json'});

//     this.http.post('localhost:3000/filter', JSON.stringify(filterOptions))
//     .subscribe( res => {
//       this.tickets = res;
//       console.log('tickets');
//       console.log(this.tickets);
//       this.totalRowCount = this.tickets.length;
//       console.log('total row');
//       console.log(this.totalRowCount);
//       this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
//       console.log('Fetched');
//     }, (err) => {
//       console.log('Error fetching');
//     });

//   }

//   changeOffset(offset, event) {

//     event.target.parentNode.parentNode.childNodes.forEach((node) => {
//       node.className = '';
//     });
//     event.target.parentNode.className = 'active';
//     this.offset = (offset - 1) * this.rowCount;
//     this.currentPage = offset;
//     this.getTickets();

//   }

//   changeRowCount() {

//     this.currentPage = 1;
//     this.offset = 0;
//     this.getTickets();

//   }

//   toggleResolutionOrder(event) {

//     console.log(event.target.childNodes[1]);

//     this.nameCount++;
//     const rem = this.nameCount % 3;

//     if (rem === 0) {
//       delete this.sortOptions['name'];
//       event.target.childNodes[1].className = '';
//     } else if (rem === 1) {
//       this.sortOptions['name'] = 1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
//     } else if (rem === 2) {
//       this.sortOptions['name'] = -1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
//     }

//     this.getTickets();

//   }

//   toggleTicketIdOrder(event) {

//     this.ageCount++;
//     const rem = this.ageCount % 3;

//     if (rem === 0) {
//       delete this.sortOptions['age'];
//       event.target.childNodes[1].className = '';
//     } else if (rem === 1) {
//       this.sortOptions['age'] = 1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
//     } else if (rem === 2) {
//       this.sortOptions['age'] = -1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
//     }

//     this.getTickets();

//   }

//   toggleStatusOrder(event) {

//     this.cityCount++;
//     const rem = this.cityCount % 3;

//     if (rem === 0) {
//       delete this.sortOptions['city'];
//       event.target.childNodes[1].className = '';
//     } else if (rem === 1) {
//       this.sortOptions['city'] = 1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-up';
//     } else if (rem === 2) {
//       this.sortOptions['city'] = -1;
//       event.target.childNodes[1].className = 'glyphicon chevron glyphicon-chevron-down';
//     }

//     this.getTickets();

//   }

//   getNumber(n) {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }

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

// tslint:disable-next-line:max-line-length
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



