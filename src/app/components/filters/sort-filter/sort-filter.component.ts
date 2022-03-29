import { Component, EventEmitter, Output } from '@angular/core';
import { SortType, TSortType } from 'src/app/models/sortType.model';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() public sortBy: EventEmitter<TSortType> = new EventEmitter();

  private sortType: SortType = SortType.date;

  private isDateAscendingOrder: boolean = true;

  private isViewsAscendingOrder: boolean = true;

  sortByDate(): void {
    this.sortType = SortType.date;
    this.sortBy.emit({ type: this.sortType, isAscendingOrder: this.isDateAscendingOrder });
    this.isViewsAscendingOrder = true;
    this.isDateAscendingOrder = !this.isDateAscendingOrder;
  }

  sortByViewsCount(): void {
    this.sortType = SortType.viewCount;
    this.sortBy.emit({ type: this.sortType, isAscendingOrder: this.isViewsAscendingOrder });
    this.isDateAscendingOrder = true;
    this.isViewsAscendingOrder = !this.isViewsAscendingOrder;
  }
}
