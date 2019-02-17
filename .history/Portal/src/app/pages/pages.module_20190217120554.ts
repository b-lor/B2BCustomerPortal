import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { SidebarComponent, HeaderComponent } from '../shared/navigation';

@NgModule({
  declarations: [PagesComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, PagesRoutes, NgbDropdownModule]
})
export class PagesModule {}
