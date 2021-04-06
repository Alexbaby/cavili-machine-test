import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardPage } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  exports: []
})

export class DashboardModule { }
