import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../models/card.model';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(cards: Card[], wordToFilter: string): Card[] {
    return cards.length && wordToFilter
      ? cards.filter((card: Card) => card.title.toLowerCase().includes(wordToFilter.toLowerCase()))
      : cards;
  }
}
