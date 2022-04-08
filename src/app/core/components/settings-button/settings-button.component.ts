import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { FiltersService } from '../../services/filters.service';

const ICON_SETTINGS_BTN_PATH: string = './assets/icons/settings-button-icon.svg';

@Component({
  selector: 'ytube-client-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  @Output() readonly toggleFilter = new EventEmitter<void>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private filtersService: FiltersService) {
    iconRegistry.addSvgIcon('settings-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_SETTINGS_BTN_PATH));
  }

  onToggleFiltersPanel(): void {
    this.filtersService.toggleFilters();
  }
}
