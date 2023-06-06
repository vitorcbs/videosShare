import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/inicio/inicio.component';
import { VideoListComponent } from './video-list/video-list.component';
import { UpdateVideoComponent } from './update-video/update-video.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
