import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Card } from 'src/app/shared/models/card.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  card: Card | null = null;

  subs = Subscription.EMPTY;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.subs = this.route.data.subscribe((data: Data) => {
      this.card = data['card'];
    });
  }

  onBackBtnClick(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
