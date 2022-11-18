import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Book } from '../model/book';
import { Borrowing } from '../model/borrowing';
import { BookService } from '../service/book.service';
import { BorrowingService } from '../service/borrowing.service';

@Component({
  selector: 'app-borrowing-add',
  templateUrl: './borrowing-add.component.html',
  styleUrls: ['./borrowing-add.component.css']
})
export class BorrowingAddComponent implements OnInit {
  borrowForm: FormGroup;
  id!: number;
  books!: Book[];
  isAddMode!: boolean;
  submitted = false;
  constructor(public fb: FormBuilder, private bookService: BookService, private borrowingService: BorrowingService, private router: Router, private route: ActivatedRoute) {
    this.borrowForm = this.fb.group({
      'name': fb.control('', (Validators.required)),
      'phone': fb.control('', (Validators.required)),
      'borrow_date': fb.control('', (Validators.required)),
      'return_date': fb.control('', (Validators.required)),
      'book_id': fb.control(0, (Validators.required)),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.setBookOption();
    if (!this.isAddMode) {
      this.borrowingService.getBorrowing(this.id).pipe(first()).subscribe(x => {
        this.borrowForm.patchValue(x)
        this.borrowForm.get('book_id')?.patchValue(x.book.id)
        this.borrowForm.get('borrow_date')?.patchValue(new Date(x.borrow_date).toLocaleDateString('en-CA'))
        this.borrowForm.get('return_date')?.patchValue(new Date(x.return_date).toLocaleDateString('en-CA'))
      })
    }
  }

  validateForm() {
    Object.keys(this.borrowForm.controls).forEach((key: string) => {
      this.borrowForm.get(key)!.markAsTouched();
    })
  }

  submit() {
    this.validateForm()
    this.submitted = true
    if (this.isAddMode) {
      this.addBorrower();

    } else {
      this.updateBorrower();
    }
  }

  cancel() {
    this.router.navigate(['admin/borrowing'])
  }

  private addBorrower() {
    this.borrowingService.addBorrowing(this.borrowForm.getRawValue() as Borrowing)
      .subscribe(x => {
        let bookId = this.borrowForm.get('book_id')?.value
        this.bookService.getBook(bookId).subscribe(x => {
          let book = x;
          book.category_id = x.category.id
          book.availability = false
          this.bookService.updateBook(bookId, book).subscribe(a => {
            this.router.navigate(['admin/borrowing'])
          })
        })
      })
  }

  updateReturnDate(e: Event) {
    let borrowDate = new Date(this.borrowForm.get('borrow_date')?.value)

    this.borrowForm.get('return_date')?.setValue(formatDate(new Date(borrowDate.setDate(borrowDate.getDate() + 7)), "yyyy-MM-dd", 'en_US'));

    console.log(e);
  }

  private updateBorrower() {
    this.borrowingService.updateBorrowing(this.id, this.borrowForm.getRawValue() as Borrowing)
      .subscribe(x => {
        this.router.navigate(['admin/borrowing'])
      })
  }

  setBookOption() {
    setTimeout(() => {
      this.bookService.getAllBook().subscribe(book => {
        this.books = book
        this.books.forEach((value, index) => {
          if (value.availability === false) {
            this.books.splice(index, 1)
          }
        })
      })
    })
  }



}
