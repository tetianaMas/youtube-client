import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSortType } from '../../models/sortType.model';

enum AnimationState {
  enter = ':enter',
  leave = ':leave',
}

enum AnimationStyle {
  up = 'translateY(-10px)',
  down = 'translateY(0)',
}

const ANIMATION_TIME = '500ms';

@Component({
  selector: 'ytube-client-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('filtersShowing', [
      transition(AnimationState.enter, [
        style({ opacity: 0, transform: AnimationStyle.up }),
        animate(ANIMATION_TIME, style({ opacity: 1, transform: AnimationStyle.down })),
      ]),
      transition(AnimationState.leave, [animate(ANIMATION_TIME, style({ opacity: 0, transform: AnimationStyle.up }))]),
    ]),
  ],
})
export class FiltersComponent {
  @Input() isActive: boolean = false;

  @Input() filterPhrase: string = '';

  @Output() readonly sortBy = new EventEmitter<TSortType>();

  @Output() readonly filterBy = new EventEmitter<string>();

  animationStateEnter = AnimationState.enter;

  animationStateLeave = AnimationState.leave;

  onSort(event: TSortType) {
    this.sortBy.emit(event);
  }

  onFilter(value: string) {
    this.filterPhrase = value;
    this.filterBy.emit(value);
  }
}
