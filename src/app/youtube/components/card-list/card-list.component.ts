import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { TSortType } from '../../models/sortType.model';
import { SORT_DATA_DEFAULT } from '../../shared/constants';
import { ISearchResponseItem } from '../../models/search-response.model';
import { response } from '../../mocks/response-mock';

const ANIMATE_STATE_UP: string = 'up';
const ANIMATE_STATE_DOWN: string = 'down';
const ANIMATION_STYLE_UP: string = '400ms cubic-bezier(0.25, 0.1, 0.25, 1)';
const ANIMATION_STYLE_DOWN: string = '300ms 100ms ease-in';
const STYLE_PADDING: number = 50;

@Component({
  selector: 'ytube-client-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [
    trigger('smoothMoving', [
      state(ANIMATE_STATE_UP, style({ paddingTop: STYLE_PADDING })),
      state(ANIMATE_STATE_DOWN, style({ paddingTop: 0 })),
      transition(`${ANIMATE_STATE_DOWN} => ${ANIMATE_STATE_UP}`, [animate(ANIMATION_STYLE_UP)]),
      transition(`${ANIMATE_STATE_UP} => ${ANIMATE_STATE_DOWN}`, [animate(ANIMATION_STYLE_DOWN)]),
    ]),
  ],
})
export class CardListComponent {
  @Input() public cards: Card[] = [];

  @Input() public sortParams: TSortType = SORT_DATA_DEFAULT;

  @Input() public isFilterActive: boolean = false;

  @Input() public filterPhrase: string = '';

  public readonly cardListStateUp: string = ANIMATE_STATE_UP;

  public readonly cardListStateDown: string = ANIMATE_STATE_DOWN;

  constructor() {
    this.cards = response.items.map((item: ISearchResponseItem) => new Card(item));
  }
}
