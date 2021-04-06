import { Component, OnInit,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit {

  @Output() onChangeComponent = new EventEmitter

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
