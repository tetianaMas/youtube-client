import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ytube-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  @Output() public toggleFilter = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'settings-btn',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/settings-button-icon.svg'),
    );
  }

  public onToggleFiltersPanel() {
    this.toggleFilter.emit();
  }
}
