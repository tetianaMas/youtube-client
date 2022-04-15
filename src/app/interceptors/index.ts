import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { ErrorNotifierInterceptor } from './error-notifier.interceptor';
import { BaseApiInterceptor } from './base-api.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BaseApiInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorNotifierInterceptor, multi: true },
];
