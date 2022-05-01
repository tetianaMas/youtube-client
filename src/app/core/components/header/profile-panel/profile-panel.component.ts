import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const LOGOUT_BTN_TEXT = 'Logout';
const ICON_PROFILE_PATH = './assets/icons/profile-button-icon.svg';

@Component({
  selector: 'ytube-client-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent {
  readonly logutBtnText = LOGOUT_BTN_TEXT;

  @Input() isUserLoggedIn: boolean = false;

  @Input() userName: string = '';

  @Output() readonly logout = new EventEmitter<void>();

  @Output() readonly profile = new EventEmitter<void>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('profile-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_PROFILE_PATH));
  }

  onLogoutClick() {
    this.logout.emit();
  }

  onUserProfile() {
    this.profile.emit();
  }
}
