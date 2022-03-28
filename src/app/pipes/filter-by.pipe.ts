import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(cards: ICard[], wordToFilter: string): ICard[] {
    if (!cards.length || !wordToFilter) return cards;

    return cards.filter((card: ICard) => card.title.toLowerCase().includes(wordToFilter.toLowerCase()));
  }
}
