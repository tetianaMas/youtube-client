import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text: string = '';

  @Input() public width: number = 120;

  @Input() public height: number = 32;

  @Input() public radius: string = '5px';
}
