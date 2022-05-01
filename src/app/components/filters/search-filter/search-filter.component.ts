import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ytube-client-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() inputValue: string = '';

  @Output() readonly filterBy = new EventEmitter<string>();

  onFilter(): void {
    this.filterBy.emit(this.inputValue.trim());
  }
}
