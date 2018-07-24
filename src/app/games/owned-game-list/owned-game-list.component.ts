import { Component, Input } from '@angular/core';

import { Game } from '../game.model';

@Component({
  selector: 'app-owned-game-list',
  templateUrl: './owned-game-list.component.html',
  styleUrls: ['./owned-game-list.component.scss']
})
export class OwnedGameListComponent {
  @Input() games: Game[];
}
