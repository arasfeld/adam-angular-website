import { Component } from '@angular/core';

import { BlogService } from '../blog.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
 
  constructor(
    private blogService: BlogService,
    private user: UserService
  ) {}
}
