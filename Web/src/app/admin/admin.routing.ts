import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { RootComponent } from './root/root.component';

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'admin',
      component: RootComponent,
      canActivate: [AuthGuard],
      children: [
       { path: '', component: PostsComponent },
       { path: 'photos',  component: PhotosComponent },
       { path: 'posts',  component: PostsComponent }
      ]
    }
]);