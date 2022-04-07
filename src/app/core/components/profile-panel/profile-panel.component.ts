import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

const NAME_DEFAULT: string = 'Your name';
const ICON_PROFILE_PATH: string = './assets/icons/profile-button-icon.svg';

@Component({
  selector: 'ytube-client-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent {
  @Input() name: string = '';

  readonly nameDefault: string = NAME_DEFAULT;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) {
    iconRegistry.addSvgIcon('profile-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_PROFILE_PATH));
  }

  public onClick(): void {
    this.router.navigate(['login']);
  }
}
