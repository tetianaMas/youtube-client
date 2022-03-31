import { Component, Input } from '@angular/core';

const WIDTH: number = 120;
const HEIGHT: number = 32;
const RADIUS: string = '5px';
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
