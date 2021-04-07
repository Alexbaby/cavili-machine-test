import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './dashboard.component';
import { UserImagePage } from './upload-user-image/upload-image.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [{
      path: 'upload-image', loadChildren: () => import('./upload-user-image/upload-image.module').then(m => m.UploadImageModule)
    }]
  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
