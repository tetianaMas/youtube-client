import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/youtube/services/filters.service';
import { SortType, TSortType } from '../../../models/sortType.model';

@Component({
  selector: 'ytube-client-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent implements OnInit, OnDestroy {
  sortParams: TSortType = {
    type: SortType.default,
    isAscendingOrder: true,
  };

  sortTypeEnum = SortType;

  subs = Subscription.EMPTY;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.subs = this.filtersService.sortParams$.subscribe((value) => (this.sortParams = value));
  }

  onSort(type: SortType): void {
    this.sortParams.isAscendingOrder = this.sortParams.type === type ? !this.sortParams.isAscendingOrder : true;
    this.sortParams.type = type;
    this.filtersService.setSortParams(this.sortParams);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
