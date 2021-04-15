import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './landing-page/landing-page-api-service/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'machine-test';

  constructor(private localstorage: LocalStorageService, private router: Router) {

  }
  ngOnInit(): void {

    // let token = this.localstorage.getToken();
    // if (token) {
    //   console.log('inside');
    //   this.router.navigate(['/dashboard']);
    // }
    // this.router.navigate(['']);
  }

}
