import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './';
import { PagesRoutes } from './pages.routes';
import { SidebarComponent, HeaderComponent } from '../shared/navigation';
import { ChangeLoginComponent } from './change-login/';

@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    HeaderComponent,
    ChangeLoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutes,
    NgbDropdownModule,
    FormsModule,
    FormsModule
  ]
})
export class PagesModule {}
