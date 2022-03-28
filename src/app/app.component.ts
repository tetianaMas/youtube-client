import { Component } from '@angular/core';
import { ICard } from './models/card.model';
import { cards } from './components/mocks/cards-mock';
import { TSortType } from './models/sortType.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cards: ICard[] = cards;

  public isShowingFilters: boolean = false;

  public sortData: TSortType = {
    type: '',
    isDescendingOrder: false,
  };

  toggleFilters(): void {
    this.isShowingFilters = !this.isShowingFilters;
  }

  setSortData(sortData: TSortType): void {
    this.sortData = sortData;
  }
}
