import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/core/services/youtube.service';

const BTN_TEXT: string = 'search';
const INPUT_PLACEHOLDER_TEXT = 'What do you want to find?';
const BTN_RADIUS: string = '0 4px 4px 0';

@Component({
  selector: 'ytube-client-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  readonly btnText = BTN_TEXT;

  readonly btnRadius = BTN_RADIUS;

  readonly placeholderText = INPUT_PLACEHOLDER_TEXT;

  seachInput: string = '';

  constructor(private youtubeservice: YoutubeService, private router: Router) {}

  onSearch(): void {
    this.youtubeservice.searchCards(this.seachInput.trim());
    this.seachInput = '';
    this.router.navigate(['main']);
  }
}
