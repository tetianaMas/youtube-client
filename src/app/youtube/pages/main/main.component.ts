import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QUERY_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'ytube-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);

  cards: Card[] = [];

  isDataLoading = false;

  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.youtubeService.cards$.pipe(takeUntil(this.destroyed$)).subscribe((cards) => (this.cards = cards));
    this.route.queryParams
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ [QUERY_KEY]: search }) => search && this.youtubeService.searchCards(search));
  }

  ngOnDestroy(): void {
    this.cards = [];
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
