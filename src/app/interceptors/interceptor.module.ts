import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonInterceptor } from './common-interceptor';


@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:CommonInterceptor,
    multi:true
}]
})

export class InterceptorModule { }
