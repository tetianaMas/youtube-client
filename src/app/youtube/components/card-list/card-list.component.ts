import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { FiltersService } from 'src/app/youtube/services/filters.service';
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

  private destroyed$ = new ReplaySubject<boolean>(1);

  sortParams: TSortType = SORT_DATA_DEFAULT;

  isFilterActive: boolean = false;

  filterPhrase: string = '';

  @Input() isDataLoading: boolean = false;

  readonly animationState = AnimationState;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.filtersService.isFiltersShown$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((isShown) => (this.isFilterActive = isShown));
    this.filtersService.sortParams$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => (this.sortParams = { ...params }));
    this.filtersService.filterParams$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => (this.filterPhrase = params));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
