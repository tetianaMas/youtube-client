import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ytube-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

  cards: Card[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.subscription = this.youtubeService.cards$.subscribe((cards) => (this.cards = cards));
    this.cards = this.youtubeService.allCards;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
