import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SortType, TSortType } from 'src/app/youtube/models/sortType.model';

@Injectable()
export class FiltersService {
  private isShown = false;

  private sortType: TSortType = {
    type: SortType.default,
    isAscendingOrder: true,
  };

  private filterValue = '';

  isFiltersShown$ = new Subject<boolean>();

  sortParams$ = new BehaviorSubject<TSortType>(this.sortType);

  filterParams$ = new BehaviorSubject<string>(this.filterValue);

  toggleFilters() {
    this.isShown = !this.isShown;
    this.isFiltersShown$.next(this.isShown);
  }

  setSortParams(params: TSortType): void {
    this.sortType = params;
    this.sortParams$.next(params);
  }

  setFilterParams(params: string): void {
    this.filterValue = params;
    this.filterParams$.next(params);
  }
}
