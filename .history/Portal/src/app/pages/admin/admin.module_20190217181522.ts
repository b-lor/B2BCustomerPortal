import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';

@NgModule({
  declarations: [UserAddComponent, UserEditComponent, UserDeleteComponent, UsersDetailComponent, UserDetailComponent, UserTransactionsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
