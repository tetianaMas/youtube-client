import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ytube-client-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
})
export class FormInputTextComponent {
  private inputType = 'text';

  @Input() control = new FormControl();

  @Input() label = '';

  @Input() name = '';

  get type() {
    return this.inputType;
  }

  @Input()
  set type(newType: string) {
    this.inputType = newType;
  }
}
