import { Component } from '@angular/core';
import { TITLE } from './constants';

@Component({
  selector: 'ytube-client-root',
  templateUrl: './ytube-client.component.html',
  styleUrls: ['./ytube-client.component.scss'],
})
export class YtubeClientComponent {
  public title = TITLE;
}
