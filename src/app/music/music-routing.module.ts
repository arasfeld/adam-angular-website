import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MusicComponent } from './music.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'music', component: MusicComponent }
]);
