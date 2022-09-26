import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog:Blog | undefined;
  @Output() Emitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(id:number) {
    this.Emitter.emit(this.blog)
  }
  edit(id:number) {
    this.Emitter.emit(this.blog)
  }

}
