import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.component';
import { DashBoardMenuPage } from './dashboard-menus/menu.component';
import { TopRightMenuPage } from './dashboard-top-right-menus/top-right-menu.component';
import { SideBarPage } from './dashboard-sidebar/sidebar.component';
import { DashboardMainPage } from '../dashboard/dashboard-main-view/main.component';

@NgModule({
  declarations: [
    DashboardPage,
    DashBoardMenuPage,
    TopRightMenuPage,
    SideBarPage,
    DashboardMainPage
  ],
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  exports: []
})

export class DashboardModule { }
