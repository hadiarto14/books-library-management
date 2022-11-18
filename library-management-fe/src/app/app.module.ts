import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookAddComponent } from './book-add/book-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { BorrowingAddComponent } from './borrowing-add/borrowing-add.component';
import { CustomDatePipe } from './pipe/custom-date.pipe';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ReturnBookAddComponent } from './return-book-add/return-book-add.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Interceptor } from './helper/interceptor.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookDetailComponent,
    NavbarComponent,
    BookManagementComponent,
    BookAddComponent,
    CategoryComponent,
    CategoryAddComponent,
    BorrowingComponent,
    BorrowingAddComponent,
    CustomDatePipe,
    ReturnBookComponent,
    ReturnBookAddComponent,
    UserComponent,
    UserAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
