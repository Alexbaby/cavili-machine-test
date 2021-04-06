import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardPage } from './dashboard/dashboard.component';
import { LandingPage } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPage, },
  { path: 'dashboard',  component: DashboardPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
