import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './services/blog.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    [MaterialComponents]
  ],
  exports: [MaterialComponents],
  providers: [BlogService],
  bootstrap: [BlogListComponent]
})
export class BlogModule { }
