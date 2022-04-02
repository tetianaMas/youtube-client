import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

const NAME_DEFAULT: string = 'Your name';
const ICON_PROFILE_PATH: string = './assets/icons/profile-button-icon.svg';
const BTN_WIDTH: number = 23;
const BTN_HEIGHT: number = 24;

@Component({
  selector: 'ytube-client-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent {
  @Input() public name: string = '';

  public readonly btnWidth: number = BTN_WIDTH;

  public readonly btnHeight: number = BTN_HEIGHT;

  public readonly nameDefault: string = NAME_DEFAULT;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) {
    iconRegistry.addSvgIcon('profile-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_PROFILE_PATH));
  }

  public onClick(): void {
    this.router.navigate(['login']);
  }
}
