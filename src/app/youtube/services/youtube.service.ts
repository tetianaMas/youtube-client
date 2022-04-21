import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { LocalstorageService } from '../../core/services/localstorage.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map, Observable, of, Subject, switchMap } from 'rxjs';
import { IVideoResponseItem, SearchResponse, VideoResponse } from 'src/app/shared/models/search-response.model';
import { Store } from '@ngrx/store';
import { StoreState } from 'src/app/redux/state.model';
import { addCards } from 'src/app/redux/videoCards/actions/youTubeApi.actions';
import { CARDS_KEY } from 'src/app/shared/constants';

const MAX_RESULTS = 20;

@Injectable()
export class YoutubeService {
  private cards: Card[] = [];

  searchRes$ = new Observable();

  seachValue$ = new Subject<string>();

  baseUrl: string = 'search';

  statUrl: string = 'videos';

  params = new HttpParams().set('part', 'snippet,statistics');

  constructor(
    private localStorage: LocalstorageService,
    private http: HttpClient,
    private storage: Store<StoreState>,
  ) {}

  searchCards(query: string): void {
    const params = new HttpParams().set('q', query).set('maxResults', MAX_RESULTS);
    this.getResponce<SearchResponse>(this.baseUrl, params)
      .pipe(
        map((val) => {
          return val.items.reduce((acc, { id: { videoId } }) => {
            acc.push(videoId);
            return acc;
          }, <string[]>[]);
        }),
        switchMap((res) => this.getResponce<VideoResponse>(this.statUrl, this.params.set('id', res.toString()))),
      )
      .subscribe((result) => this.createCards(result as VideoResponse));
  }

  searchCardById(id: string): Observable<Card> {
    const card = this.getCardById(id);
    return card
      ? of(card)
      : this.getResponce<VideoResponse>(this.statUrl, this.params.set('id', id)).pipe(
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

  private createCards(response: VideoResponse): void {
    this.cards = response.items.map((item: IVideoResponseItem) => new Card(item));
    this.storage.dispatch(addCards({ videoCards: this.cards }));
  }

  private getCardById(id: string = ''): Card | null {
    return (this.allCards.length && this.allCards.find((card) => card.id === id)) || null;
  }

  get allCards(): Card[] {
    return this.localStorage.getItem<Card[]>(CARDS_KEY) || this.cards;
  }
}
