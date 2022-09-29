import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @Output() addEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emitAdd() {
    if (this.router.url.includes('book')) {
      this.router.navigate(['book/form'])
    } else if (this.router.url.includes('blog')) {
      this.router.navigate(['blog/form'])
    }
  }

  emitDeleteAll(id:number) {
    this.deleteEmitter.emit()
  }


}
