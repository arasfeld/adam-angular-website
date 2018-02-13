import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';

import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    BlogComponent,
    PostComponent
  ],
  exports: [],
  providers: [
    BlogService
  ]
})
export class BlogModule { }