import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorNotifierService } from 'src/app/core/services/error-notifier.service';

const ERROR_MESSAGE = 'Some error occured. Please try again later.';

@Component({
  selector: 'ytube-client-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  message = ERROR_MESSAGE;

  isErrorShown: boolean = false;

  subs = Subscription.EMPTY;

  constructor(private errorNotifierService: ErrorNotifierService) {}

  ngOnInit(): void {
    this.subs = this.errorNotifierService.errorState$.subscribe((value) => (this.isErrorShown = value));
  }

  hideError(): void {
    this.errorNotifierService.hideError();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
