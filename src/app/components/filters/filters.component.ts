import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSortType } from 'src/app/shared/models/sortType.model';

enum AnimationState {
  active = 'active',
  void = 'void',
}

const ANIMATION_STYLE: string = '300ms ease-in';

@Component({
  selector: 'ytube-client-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('filtersShowing', [
      transition(`${AnimationState.active} => ${AnimationState.void}`, [
        style({
          opacity: 1,
        }),
        animate(
          ANIMATION_STYLE,
          style({
            opacity: 0,
          }),
        ),
      ]),
      transition(`${AnimationState.void} => ${AnimationState.active}`, [
        style({
          opacity: 0,
        }),
        animate(
          ANIMATION_STYLE,
          style({
            opacity: 1,
          }),
        ),
      ]),
    ]),
  ],
})
export class FiltersComponent {
  @Input() isActive: boolean = false;

  @Input() filterPhrase: string = '';

  @Output() readonly sortBy = new EventEmitter();

  @Output() readonly filterBy = new EventEmitter();

  animationStateActive = AnimationState.active;

  animationStateVoid = AnimationState.void;

  onSort(event: TSortType) {
    this.sortBy.emit(event);
  }

  onFilter(value: string) {
    this.filterPhrase = value;
    this.filterBy.emit(value);
  }
}
