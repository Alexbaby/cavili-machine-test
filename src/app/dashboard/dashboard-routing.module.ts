import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [{
       path:'view-images',
       loadChildren: () => import('./dashboard-show-images/show-image.component.module').then(m=> m.DashboardShowImageModule)
    }]
  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
