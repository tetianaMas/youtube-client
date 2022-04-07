import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { Router } from '@angular/router';

const BUTTON_TEXT = 'more...';

@Component({
  selector: 'ytube-client-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() card: Card | null = null;

  readonly btnText: string = BUTTON_TEXT;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(['main', this.card?.id]);
  }
}
