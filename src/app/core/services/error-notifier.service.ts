import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotifierService {
  errorState$ = new Subject<boolean>();

  toggleError(value: boolean): void {
    this.errorState$.next(value);
  }
}
