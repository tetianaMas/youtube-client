import { Component, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

const BUTTON_TEXT = 'more...';

@Component({
  selector: 'ytube-client-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() card: Card | null = null;

  readonly btnText = BUTTON_TEXT;
}
