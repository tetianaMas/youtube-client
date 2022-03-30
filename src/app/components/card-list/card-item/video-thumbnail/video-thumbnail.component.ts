import { Component, Input } from '@angular/core';
import { URL_DEFAULT } from './constants';

@Component({
  selector: 'ytube-client-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() public imgUrl: string | void = '';

  public readonly imgUrlDefault: string = URL_DEFAULT;
}
