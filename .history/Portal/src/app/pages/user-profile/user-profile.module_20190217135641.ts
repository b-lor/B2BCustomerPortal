import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent, UserProfileRoutes } from './';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutes]
})
export class UserProfileModule {}
