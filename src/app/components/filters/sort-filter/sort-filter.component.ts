import { Component, EventEmitter, Output } from '@angular/core';
import { SortType, TSortType } from 'src/app/shared/models/sortType.model';

enum BtnState {
  active = 'active',
  disabled = 'disabled',
}

@Component({
  selector: 'ytube-client-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() public sortBy: EventEmitter<TSortType> = new EventEmitter();

  private sortType: SortType = SortType.date;

  private isDateAscendingOrder: boolean = true;

  private isViewsAscendingOrder: boolean = true;

  public dateSortBtnState: BtnState = BtnState.disabled;

  public viewsSortBtnState: BtnState = BtnState.disabled;

  public onSortByDate(): void {
    this.sortType = SortType.date;
    this.sortBy.emit({ type: this.sortType, isAscendingOrder: this.isDateAscendingOrder });
    this.isViewsAscendingOrder = true;
    this.isDateAscendingOrder = !this.isDateAscendingOrder;
    this.dateSortBtnState = BtnState.active;
    this.viewsSortBtnState = BtnState.disabled;
  }

  public onSortByViewsCount(): void {
    this.sortType = SortType.viewCount;
    this.sortBy.emit({ type: this.sortType, isAscendingOrder: this.isViewsAscendingOrder });
    this.isDateAscendingOrder = true;
    this.isViewsAscendingOrder = !this.isViewsAscendingOrder;
    this.viewsSortBtnState = BtnState.active;
    this.dateSortBtnState = BtnState.disabled;
  }
}
