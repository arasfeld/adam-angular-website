import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Album } from './album.model';
import { Artist } from './artist.model';
import { Track } from './track.model';

@Injectable()
export class MusicService {
  LASTFM_API_KEY = '';
  LASTFM_USERNAME = '';

  constructor(private http: HttpClient) {
    this.LASTFM_API_KEY = environment.lastFmApiKey;
    this.LASTFM_USERNAME = environment.lastFmUsername;
  }

  getAlbums(): Observable<Album[]> {
    const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${
      this.LASTFM_USERNAME
    }&api_key=${this.LASTFM_API_KEY}&limit=21&format=json`;
    return this.http
      .get(requestURL)
      .pipe(
        map((response: any) =>
          response.topalbums.album.map(album => new Album(album))
        )
      );
  }

  getArtists(): Observable<Artist[]> {
    const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${
      this.LASTFM_USERNAME
    }&api_key=${this.LASTFM_API_KEY}&limit=21&format=json`;
    return this.http
      .get(requestURL)
      .pipe(
        map((response: any) =>
          response.topartists.artist.map(artist => new Artist(artist))
        )
      );
  }

  getTracks(): Observable<Track[]> {
    const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${
      this.LASTFM_USERNAME
    }&api_key=${this.LASTFM_API_KEY}&limit=10&format=json`;
    return this.http
      .get(requestURL)
      .pipe(
        map((response: any) =>
          response.recenttracks.track.map(track => new Track(track))
        )
      );
  }
}
