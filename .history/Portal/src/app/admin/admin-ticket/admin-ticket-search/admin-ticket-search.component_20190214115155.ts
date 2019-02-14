
import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../../shared/ticket.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
// import { ScriptService } from '../../../shared/script.service';

@Component({
  selector: 'app-admin-ticket-search',
  templateUrl: './admin-ticket-search.component.html',
  styleUrls: ['./admin-ticket-search.component.css'],
  
})
export class AdminTicketSearchComponent implements OnInit, OnDestroy {

  tickets: any[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = [
    'dd-MM-yyyy',
    ];

    loadScripts() {
      const dynamicScripts = [
        'https://code.jquery.com/jquery-3.3.1.js',
       'https://platform.twitter.com/widgets.js',
       'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js',
       'https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js',
       'https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js',
       'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js',
       'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js',
       'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js',
       'https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js',
       'https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js',
       'https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js',
       'https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js',
       './test.js'
      ];
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }

    constructor(private ticketService: TicketService, private chRef: ChangeDetectorRef) {
      this.loadScripts();
     }

     ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        destroy: true,
        serverSide : false,
        pageLength: 50,
        processing: true,
        dom: 'Bfrtip',
      buttons: [
        'copy', 'print', 'csv',  'pdf', 'excel', 'colvis']
    };
      this.ticketService.getTickets().subscribe(data => {
        this.tickets = data;

        this.chRef.detectChanges();
        this.dtTrigger.next();
        // const table: any = $('table');

        // this.dataTable = table.DataTable();

// console.log('table');
// console.log(table);

// console.log('datatable');
// console.log(this.dataTable);


      });
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }



    }
