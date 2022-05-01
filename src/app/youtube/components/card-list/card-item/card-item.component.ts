import { Component, Input } from '@angular/core';
import { CardAbstract } from 'src/app/shared/models/card-abstract';

const BUTTON_TEXT = 'more...';

@Component({
  selector: 'ytube-client-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() card: CardAbstract | null = null;

  readonly btnText: string = BUTTON_TEXT;

  get currentRoute(): string {
    return `${this.card?.id}`;
  }
}
