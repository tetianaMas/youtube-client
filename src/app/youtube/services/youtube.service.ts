import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { response } from 'src/app/shared/mocks/response-mock';
import { ISearchResponseItem } from 'src/app/shared/models/search-response.model';
import { Subject } from 'rxjs';
import { LocalstorageService } from '../../core/services/localstorage.service';

const CARDS_KEY = 'cards';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private cards: Card[] = [];

  cards$: Subject<Card[]>;

  constructor(private localStorage: LocalstorageService) {
    this.cards$ = new Subject<Card[]>();
  }

  searchCards(query: string): void {
    if (query) {
      this.cards = response.items.map((item: ISearchResponseItem) => new Card(item));
      this.localStorage.setItem<Card[]>(CARDS_KEY, this.cards);
      this.cards$.next(this.cards);
    }
  }

  getCardById(id: string = ''): Card | null {
    return (this.allCards.length && this.allCards.find((card) => card.id === id)) || null;
  }

  get allCards(): Card[] {
    return this.localStorage.getItem<Card[]>(CARDS_KEY) || this.cards;
  }
}
