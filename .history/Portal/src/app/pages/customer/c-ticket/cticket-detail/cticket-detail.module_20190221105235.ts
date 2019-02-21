import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { CdetailComponent } from '../../';

@NgModule({
  declarations: [CdetailComponent],
  imports: [CommonModule, DataTablesModule, FormsModule],
  exports: [CommonModule, DataTablesModule, FormsModule, CdetailComponent]
})
export class CticketDetailModule { }
