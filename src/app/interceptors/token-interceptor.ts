import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../landing-page/landing-page-api-service/local.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth = this.injector.get(LocalStorageService)
    let tokenRq = req.clone({
      setHeaders: {
        Authorization: `${auth.getToken()}`
      }
    })
    return next.handle(tokenRq);
  }

}

