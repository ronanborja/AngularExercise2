import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs:Blog[] = [];

  constructor(private list:BlogService) { 
    this.blogs = list.getBlogs();
  }

  ngOnInit(): void { 
    this.list.getBlogs();
  }

  loveAction(blog:Blog){
    console.log(blog.id);
  }
}
