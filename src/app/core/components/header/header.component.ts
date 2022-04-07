import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ytube-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() readonly filtersToggle = new EventEmitter<void>();

  constructor(private router: Router) {}

  onToggleFilter(): void {
    this.filtersToggle.emit();
  }

  onLogoClick(): void {
    this.router.navigate(['main']);
  }
}
