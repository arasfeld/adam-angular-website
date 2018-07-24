import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'games', component: GamesComponent }
]);
