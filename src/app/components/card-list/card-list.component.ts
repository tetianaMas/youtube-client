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
  up = '400ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  down = '300ms 100ms ease-in',
}

const STYLE_PADDING = 50;

@Component({
  selector: 'ytube-client-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [
    trigger('smoothMoving', [
      state(AnimationState.up, style({ paddingTop: STYLE_PADDING })),
      state(AnimationState.down, style({ paddingTop: 0 })),
      transition(`${AnimationState.down} => ${AnimationState.up}`, [animate(AnimationStateStyle.up)]),
      transition(`${AnimationState.up} => ${AnimationState.down}`, [animate(AnimationStateStyle.down)]),
    ]),
  ],
})
export class CardListComponent {
  @Input() public cards: Card[] = [];

  @Input() public sortParams: TSortType = SORT_DATA_DEFAULT;

  @Input() public isFilterActive: boolean = false;

  @Input() public filterPhrase: string = '';

  public readonly cardListStateUp: string = AnimationState.up;

  public readonly cardListStateDown: string = AnimationState.down;
}
