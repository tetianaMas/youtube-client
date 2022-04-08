import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  card: Card | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.card = data['card'];
    });
  }
}
