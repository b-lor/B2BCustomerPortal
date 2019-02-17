import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeLoginComponent, ChangeLoginRoutes } from './';


@NgModule({
  declarations: [ChangeLoginComponent],
  imports: [
    CommonModule,
    ChangeLoginRoutes
  ]
})
export class ChangeLoginModule { }
