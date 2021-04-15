import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { LoginData } from '../credential-types/login-type';
import { Token } from '../credential-types/token.type';
import { LandingPageApiService } from '../landing-page-api-service/landing-page.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit {

  constructor(private credentialService: LandingPageApiService, private router: Router) { }

  @Output() onChangeComponent = new EventEmitter  // change decorator

  loginform: FormGroup;
  token: Token;

  loginData: LoginData = {
    email: '',
    password: ''
  }

  error = {
    message: ''
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)]))
    })
  }

  userSignInForm() {
    if (this.loginform.invalid) {
      return
    }
    this.loginData = Object.assign(this.loginData, this.loginform.value);
    this.credentialService.userSignInFunction(this.loginData)
      .subscribe((token: Token) => {
        if (token.token) {
          localStorage.setItem('token', token.token);
          this.router.navigate(['/dashboard']);
        }
      }, (err) => {
         if(err)  {
           console.log('error',err.error.error.message);
           this.error.message = err.error.error.message;
         }

      })

  }




}
