import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../material.module';

import { routing } from './games-routing.module';
import { GamesComponent } from './games.component';
import { OwnedGameListComponent } from './owned-game-list/owned-game-list.component';
import { RecentlyPlayedGameListComponent } from './recently-played-game-list/recently-played-game-list.component';

import { GamesService } from './games.service';

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
    GamesComponent,
    OwnedGameListComponent,
    RecentlyPlayedGameListComponent
  ],
  exports: [],
  providers: [GamesService]
})
export class GamesModule {}
