import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSortType } from 'src/app/shared/models/sortType.model';

@Component({
  selector: 'ytube-client-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('filtersShowing', [
      transition('active => void', [
        style({
          opacity: 1.0,
        }),
        animate(
          '300ms ease-in',
          style({
            opacity: 0.0,
          }),
        ),
      ]),
      transition('void => active', [
        style({
          opacity: 0.0,
        }),
        animate(
          '300ms ease-in',
          style({
            opacity: 1.0,
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

  public onSort(event: TSortType) {
    this.sortBy.emit(event);
  }

  public onFilter(value: string) {
    this.filterPhrase = value;
    this.filterBy.emit(value);
  }
}
