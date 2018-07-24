import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Album } from './album.model';
import { Artist } from './artist.model';
import { Track } from './track.model';
import { MusicService } from './music.service';
import { LayoutService } from '../core/layout.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  loading = false;
  albums: Album[];
  artists: Artist[];
  tracks: Track[];

  constructor(
    private layout: LayoutService,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.getMusic();
  }

  getMusic() {
    this.loading = true;
    forkJoin([
      this.musicService.getAlbums(),
      this.musicService.getArtists(),
      this.musicService.getTracks()
    ])
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        ([albums, artists, tracks]) => {
          this.albums = albums;
          this.artists = artists;
          this.tracks = tracks;
        },
        (err: Response) => {
          // this.snackBar.open('Error getting posts.', null, { duration: 3000, panelClass: 'snackbar-error' });
        }
      );
  }
}
