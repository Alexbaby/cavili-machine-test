import { NgModule } from '@angular/core';

import { DashboardMainRoutingModule } from './main.routing.module';
import { DashboardMainPage } from './main.component';

@NgModule({
  declarations: [DashboardMainPage],
  imports: [DashboardMainRoutingModule],
  providers: [],
})

export class DashboardMainModule { }

