import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
  declarations: [NotFoundComponent, SidenavComponent, ToolbarComponent],
  exports: [SidenavComponent, ToolbarComponent],
  providers: [LayoutService]
})
export class CoreModule {}
