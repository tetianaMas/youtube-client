import { Component } from '@angular/core';
import { ICard } from './models/card.model';
import { cards } from './mocks/cards-mock';
import { TSortType } from './models/sortType.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cards: ICard[] = [];

  public isShowingFilters: boolean = false;

  public sortData: TSortType = {
    type: '',
    isDescendingOrder: false,
  };

  public filterData: string = '';

  toggleFilters(): void {
    this.isShowingFilters = !this.isShowingFilters;
  }

  setSortData(sortData: TSortType): void {
    this.sortData = sortData;
  }

  setFilterData(filterData: string): void {
    this.filterData = filterData;
  }

  search(): void {
    if (!this.cards.length) {
      this.cards = cards;
    }
  }
}
