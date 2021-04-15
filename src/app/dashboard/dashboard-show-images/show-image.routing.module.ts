import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardShowImagePage } from './show-image.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardShowImagePage,

  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardShowImageRouting { }
