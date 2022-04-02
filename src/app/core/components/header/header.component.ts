import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ytube-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public filtersToggle: EventEmitter<void> = new EventEmitter();

  @Output() public searchEmit: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  public onToggleFilter(): void {
    this.filtersToggle.emit();
  }

  public onSearch(value: string): void {
    this.searchEmit.emit(value);
    this.router.navigate(['videos']);
  }

  public onLogoClick(): void {
    this.router.navigate(['']);
  }
}
