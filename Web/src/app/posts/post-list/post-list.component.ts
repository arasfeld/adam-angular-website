import { Component } from '@angular/core';

import { PostsService } from '../posts.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
 
  constructor(
    private postsService: PostsService,
    private user: UserService
  ) {}

}
