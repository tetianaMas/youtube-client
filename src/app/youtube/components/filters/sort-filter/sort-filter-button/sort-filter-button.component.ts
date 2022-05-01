import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortType } from 'src/app/youtube/models/sortType.model';

@Component({
  selector: 'ytube-client-sort-filter-button',
  templateUrl: './sort-filter-button.component.html',
  styleUrls: ['./sort-filter-button.component.scss'],
})
export class SortFilterButtonComponent {
  @Input() textBtn: string = '';

  @Input() currType: SortType = SortType.date;

  @Input() sortType: SortType = SortType.default;

  @Output() readonly sort = new EventEmitter<SortType>();

  sortTypeEnum = SortType;

  onSort(value: SortType): void {
    this.sort.emit(value);
  }
}
