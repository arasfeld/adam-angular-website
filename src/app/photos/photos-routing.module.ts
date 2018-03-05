import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

import { AuthGuard } from '../auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'album', component: PhotoListComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'photo-form', component: PhotoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'photo-form/:id', component: PhotoFormComponent, canActivate: [ AuthGuard ] }
]);
