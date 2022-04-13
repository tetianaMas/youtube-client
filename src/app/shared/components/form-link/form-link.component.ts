import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-form-link',
  templateUrl: './form-link.component.html',
  styleUrls: ['./form-link.component.scss'],
})
export class FormLinkComponent {
  @Input() linkText: string = '';

  @Input() linkUrl: string = '';
}
