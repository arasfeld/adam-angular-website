import { Component, Input } from '@angular/core';

import { Game } from '../game.model';

@Component({
  selector: 'app-recently-played-game-list',
  templateUrl: './recently-played-game-list.component.html',
  styleUrls: ['./recently-played-game-list.component.scss']
})
export class RecentlyPlayedGameListComponent {
  @Input() games: Game[];
}
