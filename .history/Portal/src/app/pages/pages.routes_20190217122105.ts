import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './';

export const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' },

        // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
        // { path: 'forms', loadChildren: './form/form.module#FormModule' },
        // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
        // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
        // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
        // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PagesRoutes {}
