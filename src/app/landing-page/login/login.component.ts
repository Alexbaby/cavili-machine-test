import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit {

  @Output() onChangeComponent = new EventEmitter  // change decorator

  loginform:FormGroup;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loginform = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)]))
    })
  }




}
