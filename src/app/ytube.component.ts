import { Component } from '@angular/core';
import { TSortType } from './shared/models/sortType.model';
import { Card } from './shared/models/card.model';
import { ISearchResponseItem } from './shared/models/search-response.model';
import { response } from './shared/mocks/response-mock';
import { SORT_DATA_DEFAULT } from './shared/constants';

@Component({
  selector: 'ytube-root',
  templateUrl: './ytube.component.html',
  styleUrls: ['./ytube.component.scss'],
})
export class YtubeComponent {
  public cards: Card[] = [];

  public isShowingFilters: boolean = false;

  public sortData: TSortType = SORT_DATA_DEFAULT;

  public filterPhrase: string = '';

  public onToggleFilters(): void {
    this.isShowingFilters = !this.isShowingFilters;
  }

  public onSetSortData(sortData: TSortType): void {
    this.sortData = sortData;
  }

  public onSetFilterPhrase(filterPhrase: string): void {
    this.filterPhrase = filterPhrase;
  }

  public onSearch(value: string): void {
    if (!this.cards.length && value.length) {
      this.cards = response.items.map((resItem: ISearchResponseItem) => new Card(resItem));
    }
  }
}
