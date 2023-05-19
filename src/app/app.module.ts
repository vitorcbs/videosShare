import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoListComponent } from './modules/videos/video-list/video-list.component';
import { FavouriteVideosComponent } from './modules/videos/favourite-videos/favourite-videos.component';
import { UpdateVideoComponent } from './modules/videos/update-video/update-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoListComponent,
    FavouriteVideosComponent,
    UpdateVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
