import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../../../shared/search.service';
import { TicketService } from '../../../shared/ticket.service';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-admin-ticket-search-ticket-date-range',
  templateUrl: './admin-ticket-search-ticket-date-range.component.html',
  styleUrls: ['./admin-ticket-search-ticket-date-range.component.css']
})
export class AdminTicketSearchTicketDateRangeComponent implements OnInit, OnDestroy {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  tickets: any[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = [
    'MM-dd-yyyy',
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
       'https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js
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

  constructor(private searchService: SearchService, private ticketService: TicketService, private chRef: ChangeDetectorRef) {
    this.loadScripts();
  }

  ngOnInit() {}


  onSubmit(form: NgForm) {
    this.searchService.searchDate(form.value).subscribe(
      res => {
        this.tickets = res;

       console.log('res');
       console.log(form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong. Please contact the Admin.';
        }
      }
    );
  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  resetForm(form: NgForm) {
    this.searchService.selectedDate = {
      fromDate: '',
      toDate: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }



}
