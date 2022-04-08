import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { response } from 'src/app/shared/mocks/response-mock';
import { ISearchResponseItem } from 'src/app/shared/models/search-response.model';
import { Subject } from 'rxjs';

@Injectable()
export class YoutubeService {
  private cards: Card[] = [];

  cards$: Subject<Card[]>;

  constructor() {
    this.cards$ = new Subject<Card[]>();
  }

  searchCards(query: string): void {
    if (query) {
      this.allCards = response.items.map((item: ISearchResponseItem) => new Card(item));
      this.cards$.next(this.allCards);
    }
  }

  getCardById(id: string = ''): Card | null {
    return (this.allCards.length && this.allCards.find((card) => card.id === id)) || null;
  }

  get allCards(): Card[] {
    return this.cards;
  }

  private set allCards(cards: Card[]) {
    this.cards = cards;
  }
}
