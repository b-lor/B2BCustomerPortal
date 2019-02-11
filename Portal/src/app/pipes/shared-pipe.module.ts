import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter.pipe';
import { IssuePipe } from './issue.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    IssuePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    IssuePipe
  ]
})
export class SharedPipeModule { }
