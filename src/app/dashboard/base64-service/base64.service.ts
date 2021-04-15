import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class Base64Service {

  myimage: Observable<any>;
  file: any;


}
