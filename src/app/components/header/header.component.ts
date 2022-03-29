import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public filtersToggle: EventEmitter<void> = new EventEmitter();

  @Output() public searchEmit: EventEmitter<void> = new EventEmitter();

  toggleFilters(): void {
    this.filtersToggle.emit();
  }

  onSearch(): void {
    this.searchEmit.emit();
  }
}
