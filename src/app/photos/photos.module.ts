import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../material.module';

import { routing } from './photos-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

import { PhotosService } from './photos.service';

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
    PhotoComponent,
    PhotoFormComponent,
    PhotoListComponent
  ],
  exports: [],
  providers: [ PhotosService ]
})
export class PhotosModule { }