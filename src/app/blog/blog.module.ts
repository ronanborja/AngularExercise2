import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './services/blog.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent

  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    [MaterialComponents],
    
  ],
  exports: [MaterialComponents],
  providers: [BlogService],
  bootstrap: [BlogListComponent]
})
export class BlogModule { }
