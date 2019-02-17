import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, AdminGuard, EmployeeGuard, ManagerGuard } from './auth';






// import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';

// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';



export const appRoutes: Routes = [
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },
    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },
    // {
    //     path: 'forgot', component: UserComponent,
    //     children: [{ path: '', component: ForgotPasswordComponent }]
    // },
    {
        path: '', loadChildren: './pages/user/user.module#UserModule',
    },
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'userprofile', loadChildren: './pages/user-profile',
         canActivate: [AuthGuard]
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
