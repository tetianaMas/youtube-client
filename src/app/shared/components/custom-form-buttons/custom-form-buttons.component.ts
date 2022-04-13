import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-form-buttons',
  templateUrl: './custom-form-buttons.component.html',
  styleUrls: ['./custom-form-buttons.component.scss'],
})
export class CustomFormButtonsComponent {
  @Input() isBtnDisabled: boolean = false;

  @Input() linkText: string = '';

  @Input() linkUrl: string = '';

  @Input() btnText: string = '';
}
