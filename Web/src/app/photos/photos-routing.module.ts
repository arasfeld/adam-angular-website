import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'album', component: PhotoListComponent },
  { path: 'photo', component: PhotoComponent },
]);
