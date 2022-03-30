import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() public imgUrl: string | void = '';

  public readonly imgUrlDefault: string = './assets/card-bg-default.jpg';
}
