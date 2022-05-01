import { Component, Input } from '@angular/core';

const URL_DEFAULT: string = './assets/card-bg-default.jpg';

@Component({
  selector: 'ytube-client-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() imgUrl: string = '';

  readonly imgUrlDefault = URL_DEFAULT;
}
