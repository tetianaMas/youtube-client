import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { response } from 'src/app/shared/mocks/response-mock';
import { ISearchResponseItem } from 'src/app/shared/models/search-response.model';
import { Subject } from 'rxjs';

@Injectable()
export class YoutubeService {
  private cards: Card[] = [];

  public cards$ = new Subject<Card[]>();

  searchCards(query: string): void {
    if (query) {
      this.cards = response.items.map((item: ISearchResponseItem) => new Card(item));
      this.cards$.next(this.cards);
    }
  }

  getCardById(id: string = ''): Card | null {
    return this.cards.length ? this.cards.find((card) => card.id === id) || null : null;
  }

  get allCards(): Card[] {
    return this.cards;
  }
}
