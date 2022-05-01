import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TFormError } from '../../models/error-type';

@Component({
  selector: 'ytube-client-form-error',
  templateUrl: './form-validity-error.component.html',
  styleUrls: ['./form-validity-error.component.scss'],
})
export class FormValidityErrorComponent {
  @Input() control: AbstractControl | null = null;

  @Input() errors: TFormError[] = [];
}
