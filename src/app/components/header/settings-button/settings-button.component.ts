import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const WIDTH: number = 24;

const HEIGHT: number = 24;

const ICON_SETTINGS_BTN_PATH: string = './assets/icons/settings-button-icon.svg';

@Component({
  selector: 'ytube-client-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  @Output() public toggleFilter = new EventEmitter();

  public width: number = WIDTH;

  public height: number = HEIGHT;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('settings-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_SETTINGS_BTN_PATH));
  }

  public onToggleFiltersPanel(): void {
    this.toggleFilter.emit();
  }
}
