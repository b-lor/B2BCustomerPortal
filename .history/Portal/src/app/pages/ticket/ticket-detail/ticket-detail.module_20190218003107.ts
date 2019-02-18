import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { TicketDetailComponent } from '../';

@NgModule({
  declarations: [TicketDetailComponent],
  imports: [CommonModule, DataTablesModule, FormsModule],
  exports: [CommonModule, DataTablesModule, FormsModule, TicketDetailComponent]
})
export class TicketDetailModule {}
