import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books!: Book[];
  filterTerm!:string;
  constructor() { }

  ngOnInit(): void {
    
  }

 

}
