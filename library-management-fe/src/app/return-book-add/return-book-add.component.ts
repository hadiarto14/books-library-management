import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Borrowing } from '../model/borrowing';
import { ReturnBook } from '../model/return-book';
import { BookService } from '../service/book.service';
import { BorrowingService } from '../service/borrowing.service';
import { ReturnBookService } from '../service/return-book.service';

@Component({
  selector: 'app-return-book-add',
  templateUrl: './return-book-add.component.html',
  styleUrls: ['./return-book-add.component.css']
})
export class ReturnBookAddComponent implements OnInit {
  returnbookForm: FormGroup;
  id!: number;
  borrowers!: Borrowing[];
  isAddMode!: boolean;
  submitted = false;
  constructor(public fb: FormBuilder, private returnBookService: ReturnBookService, private bookService: BookService, private borrowingService: BorrowingService, private router: Router, private route: ActivatedRoute) {
    this.returnbookForm = this.fb.group({
      'borrowing_id': fb.control(0, (Validators.required)),
      'return_date_actual': fb.control('', (Validators.required)),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.setBorrowerOption();
    if(!this.isAddMode){
      this.returnBookService.getReturnBook(this.id).pipe(first()).subscribe(x => {
        this.returnbookForm.get('borrowing_id')?.patchValue(x.borrowing.id)
        this.returnbookForm.get('return_date_actual')?.patchValue(new Date(x.return_date_actual).toLocaleDateString('en-CA'))

      })
    }
  }

  validateForm() {
    Object.keys(this.returnbookForm.controls).forEach((key: string) => {
      this.returnbookForm.get(key)!.markAsTouched();
    })
  }

  submit() {
    this.validateForm()
    this.submitted=true
    if (this.isAddMode) {
      this.addReturnBook();

    } else {
      this.updateReturnBook();
    }
  }

  cancel() {
    this.router.navigate(['admin/return-book'])
  }

  private addReturnBook() {
    let borrowerId = this.returnbookForm.get('borrowing_id')?.value
    console.log(borrowerId);
    
    this.borrowingService.getBorrowing(borrowerId).subscribe(y => {
      let book_id = y.book.id
      this.bookService.getBook(book_id).subscribe(a => {
        let book = a;
        book.category_id = a.category.id
        book.availability = true
        this.bookService.updateBook(book_id, book).subscribe(b => {
          this.returnBookService.addReturnBook(this.returnbookForm.getRawValue() as ReturnBook)
            .subscribe(x => {
              this.router.navigate(['admin/return-book'])
            })
        })

      })
    })
  }

  private updateReturnBook() {
    this.returnBookService.updateReturnBook(this.id, this.returnbookForm.getRawValue() as ReturnBook)
      .subscribe(x => {
        this.router.navigate(['admin/return-book'])
      })
  }

  setBorrowerOption() {
    setTimeout(() => {
      this.borrowingService.getAllBorrowing().subscribe(x => this.borrowers = x)
    })
  }

}
