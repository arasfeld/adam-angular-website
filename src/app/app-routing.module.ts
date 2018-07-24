import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [{ path: '**', component: NotFoundComponent }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
