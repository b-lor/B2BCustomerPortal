import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { TicketService } from '../../../shared/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  tickets: any[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;

  formatsDate: string[] = ['dd-MM-yyyy'];

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
      'https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js'
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

  constructor(
    private ticketService: TicketService,
    private chRef: ChangeDetectorRef
  ) {
    this.loadScripts();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      destroy: true,
      serverSide: false,
      pageLength: 25,
      processing: true,
      dom: 'lBfrtip',
      buttons: ['copy', 'print', 'csv', 'pdf', 'excel', 'colvis']
    };
    this.ticketService.openTicketSearch().subscribe(data => {
      this.tickets = data;

      this.chRef.detectChanges();
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
