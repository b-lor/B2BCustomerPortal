import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedPipeModule } from '../../../pipes/shared-pipe.module';
import { IssuePipe } from '../../../pipes/issue.pipe';
@NgModule({
  declarations: [
    IssuePipe,
    // SharedPipeModule
  ],
  imports: [
    CommonModule
  ],
  providers: [
    IssuePipe,
    // SharedPipeModule
  ]
})
export class AdminTicketSearchModule { }
