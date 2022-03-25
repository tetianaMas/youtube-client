import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public text: string = '';

  @Input() public width: number = 120;

  @Input() public height: number = 32;

  @Input() public radius: string = '5px';

  ngOnInit(): void {
    console.log(this);
  }
}
