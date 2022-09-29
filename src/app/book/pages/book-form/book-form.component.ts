import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookID: string | null | undefined;
  title = "Book Form"
  bookForm: FormGroup
  ff: FormArray

  constructor(private bookService:BookService, fb:FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.bookID = this.route.snapshot.paramMap.get('id');
    let book = (this.bookService.getBook(Number(this.bookID)))

    this.bookForm = fb.group({
      name: [book?.name, [Validators.required, Validators.minLength(2), Validators.maxLength(28)]],
      addNewAuthor: fb.array([book?.authors]),
      isbn: [book?.isbn,[Validators.minLength(2),Validators.maxLength(10)]],
    });
    this.ff = this.bookForm.get('addNewAuthor') as FormArray;
  }

  ngOnInit(): void {
  }
  
  get name() {
    return this.bookForm.get('name') as FormControl;
  }

  addAuthor() {
    (this.bookForm.get('addNewAuthor') as FormArray).push(
      new FormControl()
    );
  }

  deleteAuthor(id:number) {
    this.ff.removeAt(id);
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }

  reset() {
    this.bookForm.reset();
  }

}
