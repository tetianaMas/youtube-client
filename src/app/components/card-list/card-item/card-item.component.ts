import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() public card!: Card;

  public imgUrl = '';

  ngOnInit() {
    this.imgUrl = this.card.imgUrl.standard.url;
  }
}
