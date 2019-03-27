import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-decomposition',
  templateUrl: './feed-decomposition.component.html',
  styleUrls: ['./feed-decomposition.component.css']
})
export class FeedDecompositionComponent implements OnInit {
  posts: Post[];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.posts = this.feedService.getPosts();
  }

  likePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx] = {
      ...this.posts[postIdx],
      likes: this.posts[postIdx].likes + 1,
      isLiked: true
    };
  }

  unlikePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx] = {
      ...this.posts[postIdx],
      likes: this.posts[postIdx].likes + -1,
      isLiked: false
    };
  }
}
