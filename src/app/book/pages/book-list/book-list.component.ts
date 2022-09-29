import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Book[] = [];
  constructor(private list:BookService) { 
    this.books = list.getBooks();
  }

  ngOnInit(): void {
    this.list.getBooks();
  }

  loveAction(book:Book){
    console.log(book.id);
  }


}
