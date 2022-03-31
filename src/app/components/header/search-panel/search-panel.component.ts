import { Component, EventEmitter, Output } from '@angular/core';

const BTN_TEXT: string = 'search';

const INPUT_PLACEHOLDER_TEXT = 'What do you want to find?';

@Component({
  selector: 'ytube-client-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public readonly btnText: string = BTN_TEXT;

  public readonly placeholderText: string = INPUT_PLACEHOLDER_TEXT;

  public seachInput: string = '';

  @Output() public search: EventEmitter<string> = new EventEmitter();

  public onSearch(): void {
    this.search.emit(this.seachInput.trim());
  }
}
