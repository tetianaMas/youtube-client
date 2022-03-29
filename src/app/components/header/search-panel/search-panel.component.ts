import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public readonly btnText: string = 'search';

  public seachInput = '';

  @Output() public searchBy: EventEmitter<void> = new EventEmitter();

  search(): void {
    this.searchBy.emit();
  }
}
