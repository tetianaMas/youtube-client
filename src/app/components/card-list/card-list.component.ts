import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { TSortType } from 'src/app/shared/models/sortType.model';
import { SORT_DATA_DEFAULT } from 'src/app/shared/constants';

enum AnimationState {
  up = 'up',
  down = 'down',
}

enum AnimationStateStyle {
  up = '400ms linear',
  down = '300ms 200ms linear',
}

@Component({
  selector: 'ytube-client-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [
    trigger('smoothMoving', [
      state(AnimationState.up, style({ transform: 'translateY(10px)' })),
      state(AnimationState.down, style({ transform: 'translateY(0)' })),
      transition(`${AnimationState.down} => ${AnimationState.up}`, [animate(AnimationStateStyle.up)]),
      transition(`${AnimationState.up} => ${AnimationState.down}`, [animate(AnimationStateStyle.down)]),
    ]),
  ],
})
export class CardListComponent {
  @Input() cards: Card[] = [];

  @Input() sortParams: TSortType = SORT_DATA_DEFAULT;

  @Input() isFilterActive: boolean = false;

  @Input() filterPhrase: string = '';

  readonly cardListStateUp = AnimationState.up;

  readonly cardListStateDown = AnimationState.down;
}
