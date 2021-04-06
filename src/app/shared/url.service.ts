import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UrlService {

  getHostURL(): string {
    switch (window.location.hostname) { // switch the hostname and return the url depends on that
      case 'localhost':
        return '';
      default:
        return '';
    }
  }

}
