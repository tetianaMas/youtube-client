import { Component } from '@angular/core';
import { ErrorNotifierService } from 'src/app/core/services/error-notifier.service';

const ERROR_MESSAGE = 'Some error occured. Please try again later.';

@Component({
  selector: 'ytube-client-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  message = ERROR_MESSAGE;

  constructor(public errorNotifierService: ErrorNotifierService) {}

  hideError(): void {
    this.errorNotifierService.toggleError(false);
  }
}
