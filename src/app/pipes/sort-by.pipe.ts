import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';
import { SortType, TSortType } from '../models/sortType.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(cards: ICard[], sortParams: TSortType): ICard[] {
    if (!cards.length || cards.length === 1 || sortParams.type === SortType.default) return cards;

    if (sortParams.type === SortType.date) {
      return this.sortByDate(cards, sortParams.isDescendingOrder);
    }

    return this.sortByViewCount(cards, sortParams.isDescendingOrder);
  }

  sortByDate(cards: ICard[], isDescending: boolean): ICard[] {
    return cards.sort((first: ICard, second: ICard) => {
      const date1 = new Date(first.publishedAt.slice(0, 10));
      const date2 = new Date(second.publishedAt.slice(0, 10));

      return isDescending ? date2.getTime() - date1.getTime() : date1.getTime() - date2.getTime();
    });
  }

  sortByViewCount(cards: ICard[], isDescending: boolean): ICard[] {
    return cards.sort((first: ICard, second: ICard) => {
      const count1 = Number(first.statistics.viewCount);
      const count2 = Number(second.statistics.viewCount);

      return isDescending ? count2 - count1 : count1 - count2;
    });
  }
}
