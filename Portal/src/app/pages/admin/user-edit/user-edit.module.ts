import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { UserEditComponent } from '../';

@NgModule({
  declarations: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserEditComponent
  ],
  exports: [
    DataTablesModule,
    UserEditComponent
  ],
})
export class UserEditModule { }
