import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotifierService {
  private isErrorShown = false;

  errorState$ = new Subject<boolean>();

  showError(): void {
    this.isErrorShown = true;
    this.errorState$.next(this.isErrorShown);
  }

  hideError(): void {
    this.isErrorShown = false;
    this.errorState$.next(this.isErrorShown);
  }
}
