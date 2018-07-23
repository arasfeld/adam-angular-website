import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { LayoutService } from '../../core/layout.service';
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
    private layout: LayoutService,
    private postsService: PostsService,
    private user: UserService,
    private snackBar: MatSnackBar
  ) {
    this.layout.title = 'Blog';
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this.postsService.getPosts()
      .pipe(finalize(() => this.loading = false))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      },
      (err: Response) => {
        this.snackBar.open('Error getting posts.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }
}
