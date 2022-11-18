import { Component, OnInit } from '@angular/core';
import { Borrowing } from '../model/borrowing';
import { BookService } from '../service/book.service';
import { BorrowingService } from '../service/borrowing.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent implements OnInit {
  borrowings!: Borrowing[];
  filterTerm!: string;
  constructor(private borrowingService: BorrowingService, private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBorrowing()
  }

  getAllBorrowing() {
    this.borrowingService.getAllBorrowing()
      .subscribe(x => this.borrowings = x)
  }

  deleteBorrowing(id: number): void {
    let index = this.borrowings?.findIndex(i => i.id === id)
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
        this.borrowingService.getBorrowing(id).subscribe(b => {
          let bookId = b.book.id
          this.bookService.getBook(bookId).subscribe(x => {
            let book = x;
            book.category_id = x.category.id
            book.availability = true
            this.bookService.updateBook(bookId, book).subscribe(a => {
              this.borrowingService.deleteBorrowing(id)
                .subscribe(a => {
                  this.borrowings.splice(index, 1)
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
