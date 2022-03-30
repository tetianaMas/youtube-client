import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { SortType, TSortType } from 'src/app/shared/models/sortType.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  public transform(cards: Card[], sortParams: TSortType): Card[] {
    if (!cards.length || cards.length === 1 || sortParams.type === SortType.default) return cards;

    if (sortParams.type === SortType.date) {
      return this.sortByDate(cards, sortParams.isAscendingOrder);
    }

    return this.sortByViewCount(cards, sortParams.isAscendingOrder);
  }

  private sortByDate(cards: Card[], isAscendingOrder: boolean): Card[] {
    return cards.sort((first: Card, second: Card) => {
      const date1 = new Date(first.publishedAt.slice(0, 10));
      const date2 = new Date(second.publishedAt.slice(0, 10));

      return isAscendingOrder ? date2.getTime() - date1.getTime() : date1.getTime() - date2.getTime();
    });
  }

  private sortByViewCount(cards: Card[], isAscendingOrder: boolean): Card[] {
    return cards.sort((first: Card, second: Card) => {
      const count1 = Number(first.statistics.viewCount);
      const count2 = Number(second.statistics.viewCount);

      return isAscendingOrder ? count1 - count2 : count2 - count1;
    });
  }
}
