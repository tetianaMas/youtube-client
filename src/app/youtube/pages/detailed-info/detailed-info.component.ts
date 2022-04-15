import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/shared/models/card.model';
import { Location } from '@angular/common';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  card: Card | null = null;

  subs = Subscription.EMPTY;

  card$ = new Observable<Card>();

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.card$ = this.route.data.pipe(switchMap((data) => data['card'] as Observable<Card>));
    this.card$.subscribe((res) => (this.card = res));
  }

  onBackBtnClick(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
