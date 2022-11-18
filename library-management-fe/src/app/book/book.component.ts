import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook(): void{
    this.bookService.getAllBook()
    .subscribe(book => 
      this.books = book
      )
  }

}
