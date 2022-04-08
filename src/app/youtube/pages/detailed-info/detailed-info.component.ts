import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Card } from 'src/app/shared/models/card.model';
import { Location } from '@angular/common';

const RADIUS_BORDER = '5px 0 0 5px';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  card: Card | null = null;

  btnRadius = RADIUS_BORDER;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.card = data['card'];
    });
  }

  onBackBtnClick(): void {
    this.location.back();
  }
}
