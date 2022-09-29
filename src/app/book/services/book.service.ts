import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books:Book[] = [
    {
      id: 34,
      name: "7 Habits of Angular Coders",
      authors: [
        "Ronan Borja",
        "Chin Mae Gwan",
        "Alison Pedrozo"
      ],
      isbn:"87-11-07559-7"
    },
    {
      id: 14,
      name: "Modulo Light and Darkness of Void",
      authors: [
        "Roy Jibiv",
        "Renz Politico",
        "Marvin Morada"
      ],
      isbn:"0-471-19047-0"
    }
  ]
  constructor() { }

  getBooks() {
    return this.books
  }

  getBook(id:number):Book|undefined{
    return this.books.find(book => book.id === id)
  }

  deleteBooks() {
  }

}
