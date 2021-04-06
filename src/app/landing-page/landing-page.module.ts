import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LandingPage } from './landing-page.component';
import { LoginPage } from './login/login.component';
import { SignUpPage } from './signup/signup.component';


@NgModule({
  declarations: [
    LandingPage,
    LoginPage,
    SignUpPage
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LandingPage
  ]
})

export class LandingPageModule { }
