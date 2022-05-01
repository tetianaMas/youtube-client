import { Pipe, PipeTransform } from '@angular/core';
import { CardAbstract } from 'src/app/shared/models/card-abstract';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(cards: CardAbstract[], wordToFilter: string): CardAbstract[] {
    return cards.length && wordToFilter
      ? cards.filter((card: CardAbstract) => card.title.toLowerCase().includes(wordToFilter.toLowerCase()))
      : cards;
  }
}
