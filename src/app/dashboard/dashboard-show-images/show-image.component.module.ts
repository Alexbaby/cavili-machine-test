import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardShowImagePage } from './show-image.component';
import { DashboardShowImageRouting } from './show-image.routing.module';


@NgModule({
  declarations: [
    DashboardShowImagePage
    ,],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DashboardShowImageRouting
  ],
  exports: []
})

export class DashboardShowImageModule { }
