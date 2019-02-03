import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';

import { ManagerComponent } from './manager.component';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerProfileEditComponent } from './manager-profile/manager-profile-edit/manager-profile-edit.component';

import { ManagerSalesComponent } from './manager-sales/manager-sales.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';


@NgModule({
  declarations: [
    ManagerComponent,
    ManagerDashboardComponent,
    ManagerProfileComponent,
    ManagerProfileEditComponent,
    ManagerSalesComponent,
    ManagerLoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ManagerRoutingModule,
  ],
  providers: [],
  bootstrap: [ManagerDashboardComponent]
})

export class ManagerModule { }
