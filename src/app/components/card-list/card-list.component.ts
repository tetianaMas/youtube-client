import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { cards } from '../mocks/cards-mock';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  public cards: Card[] = cards;
}
