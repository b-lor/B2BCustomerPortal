import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import 'datatables.net';
import 'datatables.net-bs4';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserAdminService } from '../../shared/services';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any;
  emailCount = 0;
  customerNumberCount = 0;
  userTypeCount = 0;
  rowCount = 25;
  offset = 0;
  sortOptions = {};
  searchText = '';
  totalRowCount = 220;
  totalPages = 1;
  searchEmpty = true;
  currentPage = 1;

  formatsDate: string[] = ['dd-MM-yyyy'];

  constructor(
    private router: Router,
    private http: HttpClient,
    private userAdminService: UserAdminService
  ) {
    this.getUsers();
  }

  ngOnInit() {}

  getUsers() {
    let filterOptions;

    if (this.searchText === '') {
      this.searchEmpty = true;
      filterOptions = {
        sortOptions: this.sortOptions,
        rowCount: +this.rowCount,
        offset: +this.offset,
        searchText: this.searchText
      };
    } else {
      this.searchEmpty = false;
      filterOptions = {
        sortOptions: this.sortOptions,
        rowCount: null,
        offset: 0,
        searchText: this.searchText
      };
    }

    this.http
      .post(
        environment.apiBaseUrl + '/filteruser',
        JSON.stringify(filterOptions),
        httpOptions
      )

      .subscribe(
        res => {
          this.users = res;
          this.users = Array.of(this.users);
          this.totalPages = Math.ceil(this.totalRowCount / this.rowCount);
        },
        err => {
          console.log('Error fetching users');
        }
      );
  }

  changeOffset(offset, event) {
    event.target.parentNode.parentNode.childNodes.forEach(node => {
      node.className = '';
    });
    event.target.parentNode.className = 'active';
    this.offset = (offset - 1) * this.rowCount;
    this.currentPage = offset;
    this.getUsers();
  }

  changeRowCount() {
    this.currentPage = 1;
    this.offset = 0;
    this.getUsers();
  }

  toggleEmailOrder(event) {
    console.log(event.target.childNodes[1]);
    console.log('event.target.childNodes[1]');
    this.emailCount++;
    const rem = this.emailCount % 3;

    if (rem === 0) {
      delete this.sortOptions['email'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['email'] = 1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['email'] = -1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-down';
    }

    this.getUsers();
  }

  toggleCustomerNumberOrder(event) {
    this.customerNumberCount++;
    const rem = this.customerNumberCount % 3;

    if (rem === 0) {
      delete this.sortOptions['customerNumber'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['customerNumber'] = 1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['customerNumber'] = -1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-down';
    }

    this.getUsers();
  }

  toggleUserTypeOrder(event) {
    this.userTypeCount++;
    const rem = this.userTypeCount % 3;

    if (rem === 0) {
      delete this.sortOptions['userType'];
      event.target.childNodes[1].className = '';
    } else if (rem === 1) {
      this.sortOptions['userType'] = 1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-up';
    } else if (rem === 2) {
      this.sortOptions['userType'] = -1;
      event.target.childNodes[1].className =
        'glyphicon chevron glyphicon-chevron-down';
    }

    this.getUsers();
  }

  getNumber(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  deleteUser(id) {
    this.userAdminService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('admin');
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('admin');
      }
    );
  }
}
