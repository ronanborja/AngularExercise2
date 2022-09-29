import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs:Blog[] = [
    {
      id: 24,
      title: "Basics of Angular Service",
      description: "Let’s learn how to use services for dependency injection.",
      author: "Nwose Lotanna Victor",
      comments: [
        "Wow awesome",
        "Amazing",
        "Cool"
      ]
    },
    {
      id: 7,
      title: "How to Learn Faster",
      description: "Let’s learn how to learn faster",
      author: "Jim Kwik",
      comments: [
        "This is awesome",
        "Napakatindi",
        "Magagamit to sa programming bruh"
      ]
    }
  ]
  constructor() { }
  
  getBlogs() {
    return this.blogs
  }

  getBlog(id:number):Blog|undefined{
    return this.blogs.find(blog => blog.id === id)
  }
  
}
