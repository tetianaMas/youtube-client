import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ytube-client-form-input-password',
  templateUrl: './form-input-password.component.html',
  styleUrls: ['./form-input-password.component.scss'],
})
export class FormInputPasswordComponent {
  type = 'password';

  @Input() control = new FormControl();

  @Input() label = '';

  @Input() name = '';

  isVisibleValue: boolean = false;

  onToggleVisibility() {
    this.isVisibleValue = !this.isVisibleValue;

    if (this.isVisibleValue) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
