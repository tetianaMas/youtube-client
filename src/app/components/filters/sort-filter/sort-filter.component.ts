import { Component, EventEmitter, Output } from '@angular/core';
import { SortType, TSortType } from 'src/app/models/sortType.model';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() public sortBy: EventEmitter<TSortType> = new EventEmitter();

  public sortType: SortType = SortType.date;

  public isDescendingOrder: boolean = false;

  sortByDate(): void {
    this.isDescendingOrder = !this.isDescendingOrder;
    this.sortType = SortType.date;
    this.sortBy.emit({ type: this.sortType, isDescendingOrder: this.isDescendingOrder });
  }

  sortByViewsCount(): void {
    this.isDescendingOrder = !this.isDescendingOrder;
    this.sortType = SortType.viewCount;
    this.sortBy.emit({ type: this.sortType, isDescendingOrder: this.isDescendingOrder });
  }
}
