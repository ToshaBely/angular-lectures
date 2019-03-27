import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Breaking news!',
      text: 'Voluptate labore veniam sit exercitation nisi fugiat voluptate laboris',
      likes: 2,
      isLiked: false
    },
    {
      id: 2,
      title: 'Meows news!',
      text: 'Laborum minim sit incididunt exercitation laborum commodo laborum.',
      likes: 42,
      isLiked: false
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
