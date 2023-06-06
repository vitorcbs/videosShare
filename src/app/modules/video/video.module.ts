import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { FavouriteVideosComponent } from './favourite-videos/favourite-videos.component';
import { UpdateVideoComponent } from './update-video/update-video.component';

@NgModule({
  declarations: [
    VideoListComponent,
    FavouriteVideosComponent,
    UpdateVideoComponent
  ],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
