import { Component, OnInit } from '@angular/core';
import { ReturnBook } from '../model/return-book';
import { BookService } from '../service/book.service';
import { BorrowingService } from '../service/borrowing.service';
import { ReturnBookService } from '../service/return-book.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  returnbooks!: ReturnBook[];
  filterTerm!:string;
  constructor(private returnBookService: ReturnBookService, private borrowService: BorrowingService, private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllReturnBook();
  }

  getAllReturnBook() {
    this.returnBookService.getAllReturnBook().subscribe(x => this.returnbooks = x)
  }

  deleteReturnBook(id: number): void {
    let index = this.returnbooks?.findIndex(i => i.id === id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.returnBookService.getReturnBook(id).subscribe(x => {
          let borrowingId = x.borrowing.id
          this.borrowService.getBorrowing(borrowingId).subscribe(y => {
            let book_id = y.book.id
            this.bookService.getBook(book_id).subscribe(z => {
              let book = z
              book.category_id = z.category.id
              book.availability = false
              this.bookService.updateBook(book_id, book).subscribe(a => {
                this.returnBookService.deleteReturnBook(id).subscribe(b => {
                  this.returnbooks.splice(index, 1)
                })
              })
            })
          })
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
