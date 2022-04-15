import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { LocalstorageService } from '../../core/services/localstorage.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map, Observable, of, Subject, switchMap } from 'rxjs';
import { IVideoResponseItem, SearchResponce, VideoResponce } from 'src/app/shared/models/search-response.model';

const CARDS_KEY = 'cards';
const MAX_RESULTS = 20;
const YOUTUBE_PATH = 'https://youtube-client-backend9.herokuapp.com/';

@Injectable()
export class YoutubeService {
  private cards: Card[] = [];

  cards$: Subject<Card[]>;

  searchRes$ = new Observable();

  seachValue$ = new Subject<string>();

  baseUrl: string = `${YOUTUBE_PATH}search`;

  statUrl: string = `${YOUTUBE_PATH}videos`;

  params = new HttpParams().set('part', 'snippet,statistics');

  constructor(private localStorage: LocalstorageService, private http: HttpClient) {
    this.cards$ = new Subject<Card[]>();
  }

  searchCards(query: string): void {
    const params = new HttpParams().set('q', query).set('maxResults', MAX_RESULTS);
    this.getResponce<SearchResponce>(this.baseUrl, params)
      .pipe(
        map((val) => {
          return val.items.reduce((acc, { id: { videoId } }) => {
            acc.push(videoId);
            return acc;
          }, <string[]>[]);
        }),
        switchMap((res) => this.getResponce<VideoResponce>(this.statUrl, this.params.set('id', res.toString()))),
      )
      .subscribe((result) => this.createCards(result as VideoResponce));
  }

  searchCardById(id: string): Observable<Card> {
    const card = this.getCardById(id);
    return card
      ? of(card)
      : this.getResponce<VideoResponce>(this.statUrl, this.params.set('id', id)).pipe(
          map((res) => {
            return new Card(res.items[0]);
          }),
        );
  }

  private getResponce<T>(url: string, params: HttpParams): Observable<T> {
    return this.http.get<T>(url, {
      params,
    });
  }

  private createCards(response: VideoResponce): void {
    this.cards = response.items.map((item: IVideoResponseItem) => new Card(item));
    this.localStorage.setItem<Card[]>(CARDS_KEY, this.cards);
    this.cards$.next(this.cards);
  }

  private getCardById(id: string = ''): Card | null {
    return (this.allCards.length && this.allCards.find((card) => card.id === id)) || null;
  }

  get allCards(): Card[] {
    return this.localStorage.getItem<Card[]>(CARDS_KEY) || this.cards;
  }
}
