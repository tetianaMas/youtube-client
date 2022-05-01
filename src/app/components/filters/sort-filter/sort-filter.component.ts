import { Component, EventEmitter, Output } from '@angular/core';
import { SortType, TSortType } from 'src/app/shared/models/sortType.model';

@Component({
  selector: 'ytube-client-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() readonly sortBy = new EventEmitter<TSortType>();

  sortType: SortType = SortType.default;

  private isAscendingOrder: boolean = true;

  sortTypeEnum = SortType;

  onSort(type: SortType): void {
    this.isAscendingOrder = this.sortType === type ? !this.isAscendingOrder : true;
    this.sortType = type;
    this.sortBy.emit({ type: this.sortType, isAscendingOrder: this.isAscendingOrder });
  }
}
