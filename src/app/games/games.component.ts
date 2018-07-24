import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Game } from './game.model';
import { GamesService } from './games.service';
import { LayoutService } from '../core/layout.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  loading = false;
  recentlyPlayedGames: Game[];
  ownedGames: Game[];

  constructor(
    private layout: LayoutService,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.loading = true;
    forkJoin([
      this.gamesService.getOwnedGames(),
      this.gamesService.getRecentlyPlayedGames()
    ])
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        ([ownedGames, recentlyPlayedGames]) => {
          this.ownedGames = ownedGames;
          this.recentlyPlayedGames = recentlyPlayedGames;
        },
        (err: Response) => {
          // this.snackBar.open('Error getting posts.', null, { duration: 3000, panelClass: 'snackbar-error' });
        }
      );
  }
}
