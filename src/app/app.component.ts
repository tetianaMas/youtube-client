import { Component } from '@angular/core';
import { ICard } from './models/card.model';
import { cards } from './mocks/cards-mock';
import { SortType, TSortType } from './models/sortType.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cards: ICard[] = [];

  public isShowingFilters: boolean = false;

  public sortData: TSortType = {
    type: SortType.default,
    isAscendingOrder: true,
  };

  public filterPhrase: string = '';

  toggleFilters(): void {
    this.isShowingFilters = !this.isShowingFilters;
  }

  setSortData(sortData: TSortType): void {
    this.sortData = sortData;
  }

  setfilterPhrase(filterPhrase: string): void {
    this.filterPhrase = filterPhrase;
  }

  search(): void {
    if (!this.cards.length) {
      this.cards = cards;
    }
  }
}
