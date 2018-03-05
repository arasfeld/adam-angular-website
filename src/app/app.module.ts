import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AuthGuard } from './auth-guard.service';
import { routing } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';
/* Core Imports */
import { CoreModule }  from './core/core.module';
/* Photos Imports */
import { PhotosModule } from './photos/photos.module';
/* Posts Imports */
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    /* App Modules */
    CoreModule,
    PhotosModule,
    PostsModule,
    routing
  ],
  providers: [
    AuthGuard,
    {
      provide: XHRBackend,
      useClass: AuthenticateXHRBackend
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
