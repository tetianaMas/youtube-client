import { Component, Input } from '@angular/core';

const RADIUS: string = '5px';
@Component({
  selector: 'ytube-client-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';

  @Input() radius: string = RADIUS;
}
