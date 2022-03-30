import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ytube-client-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public readonly btnText: string = 'search';

  public seachInput: string = '';

  @Output() public searchBy: EventEmitter<string> = new EventEmitter();

  public onSearch(): void {
    this.searchBy.emit(this.seachInput.trim());
  }
}
