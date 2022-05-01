import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ytube-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() readonly filtersToggle: EventEmitter<void> = new EventEmitter();

  @Output() readonly searchEmit: EventEmitter<string> = new EventEmitter();

  onToggleFilter(): void {
    this.filtersToggle.emit();
  }

  onSearch(value: string): void {
    this.searchEmit.emit(value);
  }
}
