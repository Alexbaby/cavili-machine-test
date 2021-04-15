import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  getToken() {
    return localStorage.getItem('token');
  }

}
