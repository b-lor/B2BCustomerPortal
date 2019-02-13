import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AdminTicketSearchIssueComponent } from './admin-ticket-search-issue.component';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { FilterPipe } from './filter.pipe';
// import { IssuePipe } from '../../../pipes/issue.pipe';
// import { SearchIssueComponent } from './search-issue.component';


@NgModule({
  declarations: [
    AdminTicketSearchIssueComponent,
    FilterPipe
    // // SearchIssueComponent,
    // IssuePipe
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    // IssuePipe
    ]
})
export class AdminTicketSearchIssueModule { }
