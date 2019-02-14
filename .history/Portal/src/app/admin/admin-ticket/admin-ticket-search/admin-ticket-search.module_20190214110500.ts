import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AdminTicketSearchComponent } from './admin-ticket-search.component';
// import { SharedPipeModule } from '../../../pipes/shared-pipe.module';
// import { IssuePipe } from '../../../pipes/issue.pipe';
@NgModule({
  declarations: [
    AdminTicketSearchComponent,
    // IssuePipe,
    // SharedPipeModule
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    // SearchIssueComponent,
    FormsModule,
    AdminTicketSearchComponent
  ],
  providers: [
    // IssuePipe,
    // SharedPipeModule
  ]
})
export class AdminTicketSearchModule { }
