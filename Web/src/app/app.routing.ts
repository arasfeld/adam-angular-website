import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);