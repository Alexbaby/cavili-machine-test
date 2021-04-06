import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpPage implements OnInit {

  @Output() onChangeComponent = new  EventEmitter;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
