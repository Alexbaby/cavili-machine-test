import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  exports: []
})

export class DashboardModule { }
