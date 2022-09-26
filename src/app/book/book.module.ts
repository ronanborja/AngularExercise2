import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const MaterialComponents = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
    
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    [MaterialComponents]
  ]
})
export class BookModule { }
