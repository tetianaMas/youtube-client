import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/youtube/services/filters.service';

@Component({
  selector: 'ytube-client-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  inputValue: string = '';

  subs = Subscription.EMPTY;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.subs = this.filtersService.filterParams$.subscribe((value) => (this.inputValue = value));
  }

  onFilter(): void {
    this.filtersService.setFilterParams(this.inputValue.trim());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
