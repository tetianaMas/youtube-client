import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ytube-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() readonly filtersToggle = new EventEmitter<void>();

  @Output() readonly searchEmit = new EventEmitter<string>();

  constructor(private router: Router) {}

  onToggleFilter(): void {
    this.filtersToggle.emit();
  }

  onSearch(value: string): void {
    this.searchEmit.emit(value);
    this.router.navigateByUrl('main');
  }

  onLogoClick(): void {
    this.router.navigateByUrl('');
  }
}
