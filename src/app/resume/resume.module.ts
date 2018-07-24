import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

import { routing } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    routing
  ],
  declarations: [ResumeComponent],
  exports: [],
  providers: []
})
export class ResumeModule {}
