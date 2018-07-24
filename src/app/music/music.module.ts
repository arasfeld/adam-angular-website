import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../material.module';

import { routing } from './music-routing.module';
import { MusicComponent } from './music.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';

import { MusicService } from './music.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    routing
  ],
  declarations: [
    MusicComponent,
    AlbumListComponent,
    ArtistListComponent,
    TrackListComponent
  ],
  exports: [],
  providers: [MusicService]
})
export class MusicModule {}
