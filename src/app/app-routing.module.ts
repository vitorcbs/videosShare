import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'listVideo', component: VideoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
