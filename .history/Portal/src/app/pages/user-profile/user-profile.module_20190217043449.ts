import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './';
import { UserProfileRoutes } from './user-profile.routes';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutes]
})
export class UserProfileModule {}
