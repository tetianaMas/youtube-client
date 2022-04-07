import { Component } from '@angular/core';
import { TSortType } from './shared/models/sortType.model';
import { Card } from './shared/models/card.model';
import { ISearchResponseItem } from './shared/models/search-response.model';
import { response } from './shared/mocks/response-mock';
import { SORT_DATA_DEFAULT } from './shared/constants';

@Component({
  selector: 'ytube-client-root',
  templateUrl: './ytube-client.component.html',
  styleUrls: ['./ytube-client.component.scss'],
})
export class YtubeClientComponent {
  cards: Card[] = [];

  isShowingFilters: boolean = false;

  sortData: TSortType = SORT_DATA_DEFAULT;

  filterPhrase: string = '';

  onToggleFilters(): void {
    this.isShowingFilters = !this.isShowingFilters;
  }

  onSetSortData(sortData: TSortType): void {
    this.sortData = sortData;
  }

  onSetFilterPhrase(filterPhrase: string): void {
    this.filterPhrase = filterPhrase;
  }

  onSearch(value: string): void {
    if (!this.cards.length && value.length) {
      this.cards = response.items.map((resItem: ISearchResponseItem) => new Card(resItem));
    }
  }
}
