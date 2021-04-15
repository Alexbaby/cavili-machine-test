import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UrlService {

  getHostURL(): string {
    // return 'https://serene-hollows-11661.herokuapp.com';

    switch (window.location.hostname) {
      case 'localhost':
        return 'https://serene-hollows-11661.herokuapp.com';
      default:
        return 'https://serene-hollows-11661.herokuapp.com';
    }
  }
}
