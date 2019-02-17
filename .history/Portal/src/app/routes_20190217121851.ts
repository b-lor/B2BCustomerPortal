import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, AdminGuard, EmployeeGuard, ManagerGuard } from './shared/auth';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/';

export const appRoutes: Routes = [
    { path: '',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'forgot', component: ForgotPasswordComponent,
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [
      AuthGuard,
      AdminGuard,
      EmployeeGuard,
      ManagerGuard
    ],
    exports: [RouterModule]
  })
  export class RoutesModule { }
