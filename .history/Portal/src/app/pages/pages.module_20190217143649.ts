import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './';
import { PagesRoutes } from './pages.routes';
import { SidebarComponent, HeaderComponent } from '../shared/navigation';

@NgModule({
  declarations: [PagesComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, PagesRoutes, NgbDropdownModule, FormsModule]
})
export class PagesModule {}
