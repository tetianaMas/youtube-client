import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() readonly search = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit(this.seachInput.trim());
    this.seachInput = '';
  }
}
