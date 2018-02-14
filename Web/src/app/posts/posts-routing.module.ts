import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'blog', component: PostListComponent },
  { path: 'post', component: PostComponent },
]);
