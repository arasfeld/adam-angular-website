import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeComponent } from './resume/resume.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { LayoutService } from './layout.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ResumeComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [
    LayoutService,
    UserService
  ]
})
export class CoreModule { }
