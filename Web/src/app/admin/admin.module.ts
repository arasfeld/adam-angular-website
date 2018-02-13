import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { routing } from './admin.routing';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { RootComponent } from './root/root.component';

import { AdminService } from './admin.service';

import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    PhotosComponent,
    PostsComponent,
    RootComponent
  ],
  exports: [],
  providers: [
    AuthGuard,
    AdminService
  ]
})
export class AdminModule { }