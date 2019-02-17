import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent, SignInComponent, SignUpComponent } from './';
import { UserRoutes } from './user.routes';

@NgModule({
  declarations: [UserComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, UserRoutes]
})
export class UserModule {}
