import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'resume', component: ResumeComponent }
]);
