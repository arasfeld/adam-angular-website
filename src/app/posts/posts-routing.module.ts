import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

import { AuthGuard } from '../auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'blog', component: PostListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post-form', component: PostFormComponent, canActivate: [ AuthGuard ] },
  { path: 'post-form/:id', component: PostFormComponent, canActivate: [ AuthGuard ] }
]);
