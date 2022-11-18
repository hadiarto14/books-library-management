import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookComponent } from './book/book.component';
import { BorrowingAddComponent } from './borrowing-add/borrowing-add.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ReturnBookAddComponent } from './return-book-add/return-book-add.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './helper/authguard.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookDetailComponent, canActivate: [AuthGuard] },
  { path: 'admin/book', component: BookManagementComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/book/add', component: BookAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/book/edit/:id', component: BookAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/category', component: CategoryComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/category/add', component: CategoryAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/category/edit/:id', component: CategoryAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/borrowing', component: BorrowingComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/borrowing/add', component: BorrowingAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/borrowing/edit/:id', component: BorrowingAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/return-book', component: ReturnBookComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/return-book/add', component: ReturnBookAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/return-book/edit/:id', component: ReturnBookAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/user', component: UserComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/user/add', component: UserAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'admin/user/edit/:id', component: UserAddComponent, canActivate: [AuthGuard], data: { role: 'admin' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
