import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {
  @Input() public title: string = '';
}
