
import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../../shared/ticket.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ScriptService } from '../../../shared/script.service';

@Component({
  selector: 'app-admin-ticket-search-issue',
  templateUrl: './admin-ticket-search-issue.component.html',
  styleUrls: ['./admin-ticket-search-issue.component.css']
})
export class AdminTicketSearchIssueComponent implements OnInit, OnDestroy {

  tickets: any[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = [
    'dd-MM-yyyy',
    ];


    constructor(private scriptService: ScriptService, private ticketService: TicketService, private router: Router, private http: HttpClient, private chRef: ChangeDetectorRef) {

     }

     ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 100,
        processing: true,
        dom: 'Bfrtip',
        buttons: [
          'copy', 'print', 'csv', 'colvis', 'pdf', 'excel']
      };
      this.ticketService.getTickets().subscribe(data => {
        this.tickets = data;
        // this.loadScripts();
        this.chRef.detectChanges();
        const table: any = $('table');

        this.dataTable = table.DataTable();

console.log('table');
console.log(table);

console.log('datatable');
console.log(this.dataTable);

        this.dtTrigger.next();
      });
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }

    // private loadScripts() {
    //   // You can load multiple scripts by just providing the key as argument into load method of the service
    //   this.scriptService.load('1', '2', '3', '4', '5', '6', '7', '8', '9').then(data => {
    //     // Script Loaded Successfully
    //   }).catch(error => console.log(error));
    // }

    }
