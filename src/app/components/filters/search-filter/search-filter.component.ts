import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ytube-client-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() public inputValue!: string;

  @Output() public filterBy: EventEmitter<string> = new EventEmitter();

  public onFilter(): void {
    this.filterBy.emit(this.inputValue);
  }
}
