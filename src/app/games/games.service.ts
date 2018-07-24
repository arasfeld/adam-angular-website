import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Game } from './game.model';

@Injectable()
export class GamesService {
  STEAM_ID = '';
  STEAM_API_KEY = '';

  constructor(private http: HttpClient) {
    this.STEAM_ID = environment.steamId;
    this.STEAM_API_KEY = environment.steamApiKey;
  }

  getOwnedGames(): Observable<Game[]> {
    const requestURL = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${
      this.STEAM_API_KEY
    }&steamid=${this.STEAM_ID}&include_appinfo=1&format=json`;
    return this.http
      .get(requestURL)
      .pipe(
        map((response: any) =>
          response.response.games.map(game => new Game(game))
        )
      );
  }

  getRecentlyPlayedGames(): Observable<Game[]> {
    const requestURL = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${
      this.STEAM_API_KEY
    }&steamid=${this.STEAM_ID}&format=json`;
    return this.http
      .get(requestURL)
      .pipe(
        map((response: any) =>
          response.response.games.map(game => new Game(game))
        )
      );
  }
}
