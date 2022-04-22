import { Component, Input } from '@angular/core';
import { CardType } from 'src/app/shared/models/card-type.model';

enum BadgeText {
  default = '',
  custom = 'Custom',
}

@Component({
  selector: 'ytube-client-card-badge',
  templateUrl: './card-badge.component.html',
  styleUrls: ['./card-badge.component.scss'],
})
export class CardBadgeComponent {
  @Input() type: CardType | null = null;

  cardType = CardType;

  textCustom = BadgeText.custom;

  textDefault = BadgeText.default;
}
