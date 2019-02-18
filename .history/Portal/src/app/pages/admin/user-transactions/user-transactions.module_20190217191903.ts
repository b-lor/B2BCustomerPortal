import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { UserTransactionsComponent } from '../';

@NgModule({
  declarations: [CommonModule, DataTablesModule, FormsModule],
  imports: [CommonModule, FormsModule, UserTransactionsComponent],
  exports: [CommonModule, DataTablesModule, UserTransactionsComponent]
})
export class UserTransactionsModule {}
