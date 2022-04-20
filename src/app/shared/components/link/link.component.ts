import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() linkText: string = '';

  @Input() linkUrl: string = '';
}
