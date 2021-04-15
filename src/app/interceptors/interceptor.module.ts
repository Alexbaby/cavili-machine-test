import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonInterceptor } from './common-interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { TokenInterceptor } from './token-interceptor';


@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CommonInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ]
})

export class InterceptorModule { }
