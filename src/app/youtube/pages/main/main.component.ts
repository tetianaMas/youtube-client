import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QUERY_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'ytube-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private subsService = Subscription.EMPTY;

  private subsRoute = Subscription.EMPTY;

  cards: Card[] = [];

  isDataLoading = false;

  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subsService = this.youtubeService.cards$.subscribe((cards) => (this.cards = cards));
    this.subsRoute = this.route.queryParams.subscribe(({ [QUERY_KEY]: search }) => {
      if (search) {
        this.isDataLoading = true;
        this.youtubeService.searchCards(search);
      } else {
        this.isDataLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.cards = [];
    this.subsService.unsubscribe();
    this.subsRoute.unsubscribe();
  }
}
