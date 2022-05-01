import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent {
  @Input() isBtnDisabled: boolean = false;

  @Input() btnText: string = '';
}
