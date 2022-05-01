import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

const RADIUS_BORDER = '5px 0 0 5px';
const LINK_TO_VIDEO_TEXT = 'Watch the video!';
@Component({
  selector: 'ytube-client-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent {
  @Input() card: Card | null = null;

  @Output() goBack = new EventEmitter<void>();

  btnRadius = RADIUS_BORDER;

  readonly linkText = LINK_TO_VIDEO_TEXT;

  onBackBtnClick() {
    this.goBack.emit();
  }
}
