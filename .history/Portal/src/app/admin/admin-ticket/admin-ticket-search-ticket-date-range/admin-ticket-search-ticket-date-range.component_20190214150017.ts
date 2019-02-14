import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ticket-search-ticket-date-range',
  templateUrl: './admin-ticket-search-ticket-date-range.component.html',
  styleUrls: ['./admin-ticket-search-ticket-date-range.component.css']
})
export class AdminTicketSearchTicketDateRangeComponent implements OnInit {

  
  loadScripts() {
    const dynamicScripts = [
      'https://code.jquery.com/jquery-2.1.3.min.js',
     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js',
     'https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min.js',
     'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js',
     'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.3/js/bootstrap-datetimepicker.min.js',

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


  constructor() {
    this.loadScripts();
  }

  ngOnInit() {
  }

}
