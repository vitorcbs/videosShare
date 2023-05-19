import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VideoListComponent } from './modules/videos/video-list/video-list.component';
import { UpdateVideoComponent } from './modules/videos/update-video/update-video.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'listVideo', component: VideoListComponent
  },
  {
    path: 'updateVideo', component: UpdateVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
