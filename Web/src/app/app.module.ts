import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

/* Admin Imports */
import { AdminModule } from './admin/admin.module';
/* Login Imports */
import { LoginModule }  from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ResumeComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    /* App Modules */
    AdminModule,
    LoginModule,
    routing
  ],
  providers: [{ 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
