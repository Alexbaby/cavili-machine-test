import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { InterceptorModule } from './interceptors/interceptor.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundModule } from './404/page-not-found/page-not-found.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    LandingPageModule,
    DashboardModule,
    PageNotFoundModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
