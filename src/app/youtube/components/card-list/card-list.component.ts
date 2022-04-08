import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/core/services/filters.service';
import { Card } from 'src/app/shared/models/card.model';
import { TSortType } from '../../models/sortType.model';
import { SORT_DATA_DEFAULT } from '../../shared/constants';

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
export class CardListComponent implements OnInit, OnDestroy {
  @Input() cards: Card[] = [];

  subs = Subscription.EMPTY;

  subsSort = Subscription.EMPTY;

  subsFilter = Subscription.EMPTY;

  sortParams: TSortType = SORT_DATA_DEFAULT;

  isFilterActive: boolean = false;

  filterPhrase: string = '';

  readonly animationState = AnimationState;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.subs = this.filtersService.isFiltersShown$.subscribe((isShown) => (this.isFilterActive = isShown));
    this.subsSort = this.filtersService.sortParams$.subscribe((params) => (this.sortParams = { ...params }));
    this.subsFilter = this.filtersService.filterParams$.subscribe((params) => (this.filterPhrase = params));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.subsSort.unsubscribe();
    this.subsFilter.unsubscribe();
  }
}
