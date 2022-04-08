import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/core/services/filters.service';

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
export class FiltersComponent implements OnInit, OnDestroy {
  subs = Subscription.EMPTY;

  isActive: boolean = false;

  animationStateEnter = AnimationState.enter;

  animationStateLeave = AnimationState.leave;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.subs = this.filtersService.isFiltersShown$.subscribe((isShown) => (this.isActive = isShown));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
