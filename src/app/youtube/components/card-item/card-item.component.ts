import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { Router } from '@angular/router';

const BUTTON_TEXT: string = 'more...';

@Component({
  selector: 'ytube-client-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() public card: Card | null = null;

  public readonly btnText: string = BUTTON_TEXT;

  constructor(private router: Router) {}

  public onClick(): void {
    this.router.navigate(['main', this.card?.id]);
  }
}
