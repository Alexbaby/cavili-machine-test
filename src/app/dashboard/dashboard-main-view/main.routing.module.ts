import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainPage } from './main.component';

const routes: Routes = [
  { path: '', component: DashboardMainPage }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardMainRoutingModule { }
