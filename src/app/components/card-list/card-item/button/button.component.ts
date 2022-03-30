import { Component, Input } from '@angular/core';
import { HEIGHT, RADIUS, WIDTH } from './constants';

@Component({
  selector: 'ytube-client-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text: string = '';

  @Input() public width: number = WIDTH;

  @Input() public height: number = HEIGHT;

  @Input() public radius: string = RADIUS;
}
