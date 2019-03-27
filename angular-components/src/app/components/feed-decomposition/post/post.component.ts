import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnChanges {
  @Input() post: Post;
  @Output() like = new EventEmitter<Post>();
  @Output() unlike = new EventEmitter<Post>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  likePost() {
    this.like.emit(this.post);
  }

  unlikePost() {
    this.unlike.emit(this.post);
  }
}
