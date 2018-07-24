import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
import { routing } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';
import { HomeModule } from './home/home.module';
import { MusicModule } from './music/music.module';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    /* App Modules */
    CoreModule,
    ContactModule,
    GamesModule,
    HomeModule,
    MusicModule,
    ResumeModule,
    routing
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
