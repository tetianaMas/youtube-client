import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ErrorNotifierService } from '../core/services/error-notifier.service';

@Injectable()
export class ErrorNotifierInterceptor implements HttpInterceptor {
  constructor(private errorNotifier: ErrorNotifierService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.errorNotifier.showError();
          console.log(error);
        }
        return EMPTY;
      }),
    );
  }
}
