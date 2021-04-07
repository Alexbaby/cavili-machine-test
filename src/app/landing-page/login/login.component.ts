import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginData } from '../credential-types/login-type';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit {

  @Output() onChangeComponent = new EventEmitter  // change decorator

  loginform: FormGroup;

  loginData: LoginData = {
    email: '',
    password: ''
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
    console.log('login data',this.loginData);

  }




}
