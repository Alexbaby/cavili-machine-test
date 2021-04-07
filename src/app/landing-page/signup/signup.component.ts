import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpData } from '../credential-types/signup-type';
import { LandingPageApiService } from '../landing-page-api-service/landing-page.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpPage implements OnInit {

  constructor(
    private credentialService: LandingPageApiService,
    private router:Router
  ) { }

  @Output() onChangeComponent = new EventEmitter; // change component emitter

  signUpForm: FormGroup;

  signupData: SignUpData = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)]))
    })
  }

  userRegistration() {
    if (this.signUpForm.invalid) {
      return
    }
    this.signupData = Object.assign(this.signupData, this.signUpForm.value);
    this.credentialService.userSignUpFunction(this.signupData)
      .subscribe((res: string) => {
        console.log('response', res);
        if (res) {
          alert('Sucess Please Login');
          window.location.reload();
        }
      }, (err) => {
        console.log('server error', err);

      })
  }

}
