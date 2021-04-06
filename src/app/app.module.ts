import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterceptorModule } from './interceptors/interceptor.module';
import { LandingPageModule } from './landing-page/landing-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterceptorModule,
    LandingPageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }