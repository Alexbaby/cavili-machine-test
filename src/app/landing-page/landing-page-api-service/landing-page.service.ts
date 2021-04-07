import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { UrlService } from '../../shared/url.service';
import { SignUpData } from '../credential-types/signup-type';
import { LoginData } from '../credential-types/login-type';

@Injectable({
  providedIn: 'root'
})

export class LandingPageApiService {
  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  signupData: SignUpData;
  loginData: LoginData;

  userSignUpFunction(signupData: SignUpData) {
    const url = this.urlService.getHostURL() + '/api/v1/signup';
    const body = signupData;
    return this.http.post(url, body)
  }

  userSignInFunction(loginData: LoginData) {
    const url = this.urlService.getHostURL() + '/api/v1/signin';
    const body = loginData;
    return this.http.post(url, body)
  }


}
