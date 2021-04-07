import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { LogginGuardGuard } from './guards/loggin-guard.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'dashboard', canActivate:[LogginGuardGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => DashboardModule)
  }, {
    path: '**',
    loadChildren: async () => {
      const m = await import('./404/page-not-found/page-not-found.module');
      return m.PageNotFoundModule;
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
