import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IssuePipe } from '../../../../pipes/issue.pipe';
// import { SearchIssueComponent } from './search-issue.component';

@NgModule({
  declarations: [
    // SearchIssueComponent,
    IssuePipe
  ],
  imports: [
    CommonModule,
    // SearchIssueComponent,
    FormsModule
  ],
  providers: [
    IssuePipe
    ]
})
export class SearchIssueModule { }
