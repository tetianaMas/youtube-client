import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  public transform(cards: Card[], wordToFilter: string): Card[] {
    if (!cards.length || !wordToFilter) return cards;

    return cards.filter((card: Card) => card.title.toLowerCase().includes(wordToFilter.toLowerCase()));
  }
}
