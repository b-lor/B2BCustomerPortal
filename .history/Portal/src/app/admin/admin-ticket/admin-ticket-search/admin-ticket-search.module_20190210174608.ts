import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
// import { SharedPipeModule } from '../../../pipes/shared-pipe.module';
// import { IssuePipe } from '../../../pipes/issue.pipe';
@NgModule({
  declarations: [
    // IssuePipe,
    // SharedPipeModule
  ],
  imports: [
    CommonModule,
    DataTablesModule.forRoot()
  ],
  providers: [
    // IssuePipe,
    // SharedPipeModule
  ]
})
export class AdminTicketSearchModule { }
