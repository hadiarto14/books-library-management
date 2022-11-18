import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  books: Book[] = [];
  filterTerm!: string;
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllBook()

  }

  getAllBook(): void {
    this.bookService.getAllBook()
      .subscribe(book => {

        this.books = book
      }

      )

  }

  deleteBook(id: number): void {
    let index = this.books?.findIndex(i => i.id === id)
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
        this.bookService.deleteBook(id).subscribe(a => this.books.splice(index, 1))

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  add() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
