import { Pipe, PipeTransform } from '@angular/core';
import { CardAbstract } from 'src/app/shared/models/card-abstract';
import { SortType, TSortType } from '../../models/sortType.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(cards: CardAbstract[], sortParams: TSortType): CardAbstract[] {
    if (cards.length <= 1 || sortParams.type === SortType.default) return cards;

    return sortParams.type === SortType.date
      ? this.sortByDate(cards, sortParams.isAscendingOrder)
      : this.sortByViewCount(cards, sortParams.isAscendingOrder);
  }

  private sortByDate(cards: CardAbstract[], isAscendingOrder: boolean): CardAbstract[] {
    return cards.sort((first: CardAbstract, second: CardAbstract) => {
      const date1 = new Date(this.getCurrentDate(first.publishedAt));
      const date2 = new Date(this.getCurrentDate(second.publishedAt));

      return this.sortValues(date2.getTime(), date1.getTime(), isAscendingOrder);
    });
  }

  private sortByViewCount(cards: CardAbstract[], isAscendingOrder: boolean): CardAbstract[] {
    return cards.sort((first: CardAbstract, second: CardAbstract) => {
      const count1 = Number(first.statistics?.viewCount || 1);
      const count2 = Number(second.statistics?.viewCount || 1);

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
