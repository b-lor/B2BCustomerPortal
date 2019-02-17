import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeLoginComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: ChangeLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ChangeLoginRoutes {}
