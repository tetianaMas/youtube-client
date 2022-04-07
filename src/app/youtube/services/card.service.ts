import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { response } from '../mocks/response-mock';
import { ISearchResponseItem } from '../models/search-response.model';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class CardService {
  private cards: Card[] = [];

  constructor() {
    this.cards = response.items.map((item: ISearchResponseItem) => new Card(item));
  }

  getCards(): Observable<Card[]> {
    return of(this.cards);
  }

  getCard(id: string): Observable<Card | void> {
    return this.getCards().pipe(map((cards: Card[]) => cards.find((card) => card.id === id)));
  }
}
