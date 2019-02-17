import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  collapedSideBar: boolean;
  constructor() {}

  ngOnInit() {}
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
