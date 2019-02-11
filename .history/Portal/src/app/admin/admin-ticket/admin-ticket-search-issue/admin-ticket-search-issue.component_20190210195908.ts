import { Component, OnInit } from '@angular/core';
// import { DataTableCnZh } from '../../../utilities/datatables.language.cn';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-baseinfocompany-list',
  templateUrl: './baseinfocompany-list.component.html',
  styleUrls: ['./baseinfocompany-list.component.scss']
})
export class AdminTicketSearchIssueComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[];


  constructor(private http: HttpClient) { }

  OnInit () {
    const that = this;
    // console.log(DataTableCnZh());
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // Searching: false, // own search
      lengthMenu: [10, 20, 50],
      // language: DataTableCnZh(),
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
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





// }
