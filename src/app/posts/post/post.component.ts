import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postId: number;
  post: Post;
  loading: boolean = false;
  imgSrc: string;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
      this.route.params.subscribe(params => {
        this.postId = +params['id'];
        this.getPost();
      });
  }

  getPost(): void {
    this.loading = true;
    this.postsService.getPost(this.postId)
      .finally(() => this.loading = false)
      .subscribe((post: Post) => {
        this.post = post;
      },
      (err: Response) => {
        this.snackBar.open('Error getting post.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }
}