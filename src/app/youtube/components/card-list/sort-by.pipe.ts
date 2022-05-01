import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { SortType, TSortType } from '../../models/sortType.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(cards: Card[], sortParams: TSortType): Card[] {
    if (cards.length <= 1 || sortParams.type === SortType.default) return cards;

    return sortParams.type === SortType.date
      ? this.sortByDate(cards, sortParams.isAscendingOrder)
      : this.sortByViewCount(cards, sortParams.isAscendingOrder);
  }

  private sortByDate(cards: Card[], isAscendingOrder: boolean): Card[] {
    return cards.sort((first: Card, second: Card) => {
      const date1 = new Date(this.getCurrentDate(first.publishedAt));
      const date2 = new Date(this.getCurrentDate(second.publishedAt));

      return this.sortValues(date2.getTime(), date1.getTime(), isAscendingOrder);
    });
  }

  private sortByViewCount(cards: Card[], isAscendingOrder: boolean): Card[] {
    return cards.sort((first: Card, second: Card) => {
      const count1 = Number(first.statistics.viewCount);
      const count2 = Number(second.statistics.viewCount);

      return this.sortValues(count1, count2, isAscendingOrder);
    });
  }

  private sortValues(firstVal: number, secondVal: number, isAscendingOrder: boolean): number {
    return isAscendingOrder ? firstVal - secondVal : secondVal - firstVal;
  }

  private getCurrentDate(date: string): string {
    return date.slice(0, 10);
  }
}
