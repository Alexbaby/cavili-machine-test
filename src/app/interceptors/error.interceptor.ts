import {
  HttpEvent, HttpHandler, HttpRequest,
  HttpErrorResponse, HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CatchError } from '../shared/error-catch.service';

export class ErrorInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;

          } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;

          }

          console.log(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
