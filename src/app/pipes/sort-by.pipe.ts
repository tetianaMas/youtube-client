import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';

type TSortingType = {
  [index: string]: (cards: ICard[], isDescending: boolean) => ICard[];
};

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(cards: ICard[], type: string, isDescending: boolean): ICard[] {
    const typeSorting: TSortingType = {
      date: this.sortByDate,
      viewCount: this.sortByViewCount,
    };

    if (!cards.length || cards.length === 1 || !type || !typeSorting[type]) return cards;

    return typeSorting[type](cards, isDescending);
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
