import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'resume', component: ResumeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);