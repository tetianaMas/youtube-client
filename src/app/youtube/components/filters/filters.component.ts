import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSortType } from '../../models/sortType.model';

const STATE_ACTIVE: string = 'active';

const STATE_VOID: string = 'void';

const ANIMATION_STYLE: string = '300ms ease-in';

@Component({
  selector: 'ytube-client-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('filtersShowing', [
      transition(`${STATE_ACTIVE} => ${STATE_VOID}`, [
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
      transition(`${STATE_VOID} => ${STATE_ACTIVE}`, [
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
  @Input() public isActive: boolean = false;

  @Input() public filterPhrase: string = '';

  @Output() public sortBy: EventEmitter<TSortType> = new EventEmitter();

  @Output() public filterBy: EventEmitter<string> = new EventEmitter();

  public animationStateActive: string = STATE_ACTIVE;

  public animationStateVoid: string = STATE_VOID;

  public onSort(event: TSortType) {
    this.sortBy.emit(event);
  }

  public onFilter(value: string) {
    this.filterPhrase = value;
    this.filterBy.emit(value);
  }
}
