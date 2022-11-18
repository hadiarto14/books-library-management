import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { BookService } from '../service/book.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;
  id!: number;
  categories!: Category[];
  isAddMode!: boolean;
  submitted = false;
  constructor(public fb: FormBuilder, private bookService: BookService, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.bookForm = this.fb.group({
      'title': fb.control('', (Validators.required)),
      'author': fb.control('', (Validators.required)),
      'image': fb.control('', (Validators.required)),
      'rating': fb.control('', (Validators.required)),
      'availability': fb.control(0, (Validators.required)),
      'category_id': fb.control(0, (Validators.required)),
      'description': fb.control('', (Validators.required))
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.setCategoryOption();
    if (!this.isAddMode) {
      this.bookService.getBook(this.id).pipe(first()).subscribe(x => {
        this.bookForm.patchValue(x)
        this.bookForm.get('category_id')?.patchValue(x.category.id)
      })
    }
  }
  validateForm() {
    Object.keys(this.bookForm.controls).forEach((key: string) => {
      this.bookForm.get(key)!.markAsTouched();
    })
  }

  submit() {
    this.validateForm()
    this.submitted = true
    if(this.isAddMode){
      if (this.bookForm.valid) {
        this.addBook();
      }
    }else{
      this.updateBook();
    }
  }

  cancel(){
    this.router.navigate(['admin/book'])
  }

  private addBook() {
    this.bookService.addBook(this.bookForm.getRawValue() as Book)
      .subscribe(book => {
        this.router.navigate(['admin/book'])
      })
  }

  private updateBook(){
    this.bookService.updateBook(this.id, this.bookForm.getRawValue() as Book)
        .subscribe(book => {
          this.router.navigate(['admin/book'])
        })
  }

  setCategoryOption() {
    setTimeout(() => {
      this.categoryService.getAllCategory().subscribe(category => this.categories = category)
    })
  }

}
