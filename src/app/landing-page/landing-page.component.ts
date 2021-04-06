import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPage implements OnInit {

  isShowSignup = false;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  changeComponentTosignUp(e) {
    this.isShowSignup = true;
  }
  changeComponentTologin(e) {
    if (e === 'login') {
      this.isShowSignup = false;
    }
  }
}
