import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../material.module';

import { routing } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    routing
  ],
  declarations: [
    PostComponent,
    PostFormComponent,
    PostListComponent
  ],
  exports: [],
  providers: [ PostsService ]
})
export class PostsModule { }