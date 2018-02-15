import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  loading: boolean = false;

  constructor(
    private postsService: PostsService,
    private user: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this.postsService.getPosts()
      .finally(() => this.loading = false)
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log(posts);
      },
      (err: Response) => {
        this.snackBar.open('Error getting posts.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }
}
