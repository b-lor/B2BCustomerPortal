import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { CclosedComponent } from '../../';

@NgModule({
  declarations: [CclosedComponent],
  imports: [CommonModule, DataTablesModule, FormsModule],
  exports: [CommonModule, DataTablesModule, FormsModule, CclosedComponent]
})
export class CclosedModule { }
