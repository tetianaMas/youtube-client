import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/shared/models/card.model';
import { TSortType } from 'src/app/shared/models/sortType.model';
import { SORT_DATA_DEFAULT } from 'src/app/shared/constants';

@Component({
  selector: 'ytube-client-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [
    trigger('smoothMoving', [
      state('up', style({ paddingTop: 50 })),
      state('down', style({ paddingTop: 0 })),
      transition('down => up', [animate('400ms cubic-bezier(0.25, 0.1, 0.25, 1)')]),
      transition('up => down', [animate('300ms 100ms ease-in')]),
    ]),
  ],
})
export class CardListComponent {
  @Input() public cards: ICard[] = [];

  @Input() public sortParams: TSortType = SORT_DATA_DEFAULT;

  @Input() public isFilterActive: boolean = false;

  @Input() public filterPhrase: string = '';
}
