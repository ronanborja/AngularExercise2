import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule,
    SharedModule,
    [MaterialComponents]
  
  ]
})
export class BookModule { }
