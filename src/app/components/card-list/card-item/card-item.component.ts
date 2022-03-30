import { Component, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { BUTTON_TEXT } from './constants';

@Component({
  selector: 'ytube-clientcard-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() public card: Card | null = null;

  public readonly btnText: string = BUTTON_TEXT;
}
