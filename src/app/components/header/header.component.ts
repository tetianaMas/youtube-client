import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ytube-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public filtersToggle: EventEmitter<void> = new EventEmitter();

  @Output() public searchEmit: EventEmitter<string> = new EventEmitter();

  public onToggleFilters(): void {
    this.filtersToggle.emit();
  }

  public onSearch(value: string): void {
    this.searchEmit.emit(value);
  }
}
