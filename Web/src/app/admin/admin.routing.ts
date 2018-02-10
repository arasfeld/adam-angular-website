import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { HomeComponent }    from './home/home.component';
import { PhotosComponent }    from './photos/photos.component';
import { PostsComponent }    from './posts/posts.component'; 

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'admin',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'photos',  component: PhotosComponent },
       { path: 'posts',  component: PostsComponent }
      ]
    }
]);