import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

import { routing } from './admin.routing';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { AdminService } from './admin.service';

import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    PhotosComponent,
    PostsComponent
  ],
  exports: [],
  providers: [
    AuthGuard,
    AdminService
  ]
})
export class AdminModule { }