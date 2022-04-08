import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ytube-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private subsService = Subscription.EMPTY;

  private subsRoute = Subscription.EMPTY;

  cards: Card[] = [];

  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subsService = this.youtubeService.cards$.subscribe((cards) => (this.cards = cards));
    this.subsRoute = this.route.queryParams.subscribe(({ search }) => this.youtubeService.searchCards(search));
  }

  ngOnDestroy(): void {
    this.cards = [];
    this.subsService.unsubscribe();
    this.subsRoute.unsubscribe();
  }
}
