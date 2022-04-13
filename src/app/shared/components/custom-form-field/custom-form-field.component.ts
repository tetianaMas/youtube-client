import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TFormError } from '../../models/error-type';

@Component({
  selector: 'ytube-client-form-field',
  templateUrl: './custom-form-field.component.html',
  styleUrls: ['./custom-form-field.component.scss'],
})
export class CustomFormFieldComponent {
  @Input() parentForm: FormGroup = new FormGroup({});

  @Input() type: string = 'text';

  @Input() name: string = '';

  @Input() label: string = '';

  @Input() errors: TFormError[] = [];

  @Input() isToggleBtnShow: boolean = false;

  isVisibleValue: boolean = false;

  onToggleVisibility(): void {
    this.isVisibleValue = !this.isVisibleValue;

    if (this.isVisibleValue) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
