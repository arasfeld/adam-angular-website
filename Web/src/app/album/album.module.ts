import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';

import { AlbumService } from './album.service';

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
    AlbumComponent,
    PhotoComponent
  ],
  exports: [],
  providers: [
    AlbumService
  ]
})
export class AlbumModule { }