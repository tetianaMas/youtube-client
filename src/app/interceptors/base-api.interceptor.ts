import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://youtube-client-backend9.herokuapp.com/';

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const res = request.clone({ url: `${BASE_URL}${request.url}` });
    return next.handle(res);
  }
}
