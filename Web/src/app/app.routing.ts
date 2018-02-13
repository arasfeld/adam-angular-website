import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album/album.component';
import { BlogComponent } from './blog/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PhotoComponent } from './album/photo/photo.component';
import { PostComponent } from './blog/post/post.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'post', component: PostComponent },
  { path: 'resume', component: ResumeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);