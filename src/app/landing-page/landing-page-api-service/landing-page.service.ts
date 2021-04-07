import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { UrlService } from '../../shared/url.service';
import { SignUpData } from '../credential-types/signup-type';

@Injectable({
  providedIn: 'root'
})

export class LandingPageApiService {
  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  signupData: SignUpData;

  userSignUpFunction(signupData: SignUpData) {
    const url = this.urlService.getHostURL() + '/v1/signup'
    console.log('url',url);
    const body = this.signupData;
    return this.http.post(url, body)
  }


}
