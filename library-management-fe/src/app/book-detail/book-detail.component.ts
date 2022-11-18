import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book! : Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void{
    const idParam= Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(idParam).subscribe(a => this.book = a);
  }

}
