import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AdminTicketSearchIssueComponent } from './admin-ticket-search-issue.component';
// import { IssuePipe } from '../../../pipes/issue.pipe';
// import { SearchIssueComponent } from './search-issue.component';

@NgModule({
  declarations: [
    AdminTicketSearchIssueComponent
    // // SearchIssueComponent,
    // IssuePipe
  ],
  imports: [
    CommonModule,
    DataTablesModule.forRoot(),
    // SearchIssueComponent,
    FormsModule
  ],
  providers: [
    // IssuePipe
    ]
})
export class SearchIssueModule { }
