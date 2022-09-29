import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogID: string | null | undefined;
  title = "Blog Form"
  blogForm: FormGroup
  ff: FormArray

  constructor(private blogService:BlogService, fb:FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.blogID = this.route.snapshot.paramMap.get('id');
    let blog = (this.blogService.getBlog(Number(this.blogID)))

    this.blogForm = fb.group({
      title: [blog?.title, [Validators.required, Validators.minLength(2), Validators.maxLength(28)]],
      description: [blog?.description, [Validators.required, Validators.minLength(2), Validators.maxLength(28)]],
      author: [blog?.author, [Validators.required, Validators.minLength(2), Validators.maxLength(28)]],
      addNewComment: fb.array([blog?.comments]),
    });
    this.ff = this.blogForm.get('addNewComment') as FormArray;
  }


  ngOnInit(): void {
  }
  
  get blogTitle() {
    return this.blogForm.get('title') as FormControl;
  }

  

  get description() {
    return this.blogForm.get('description') as FormControl;
  }

  get author() {
    return this.blogForm.get('author') as FormControl;
  }

  addComment() {
    (this.blogForm.get('addNewComment') as FormArray).push(
      new FormControl()
    );
  }

  deleteComment(id:number) {
    this.ff.removeAt(id);
  }

  get isbn() {
    return this.blogForm.get('isbn') as FormControl;
  }

  reset() {
    this.blogForm.reset();
  }

}
