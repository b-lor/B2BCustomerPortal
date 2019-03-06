import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {
  UserService
} from '../../services';

@Component({
  selector: 'app-csidebar',
  templateUrl: './csidebar.component.html',
  styleUrls: ['./csidebar.component.css']
})
export class CsidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  showTicket: string;
  showUser: string;
  showRole: string;
  pushRightClass: string;

  userId = this.userService.getLoginId();

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router, private userService: UserService) {

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.showTicket = '';
    this.showUser = '';
    this.showRole = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addTicketClass(element: any) {
    if (element === this.showTicket) {
      this.showTicket = '0';
    } else {
      this.showTicket = element;
    }
  }

  addUserClass(element: any) {
    if (element === this.showUser) {
      this.showUser = '0';
    } else {
      this.showUser = element;
    }
  }

  addRoleClass(element: any) {
    if (element === this.showRole) {
      this.showRole = '0';
    } else {
      this.showRole = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}