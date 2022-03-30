import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NAME_DEFAULT } from './constants';

@Component({
  selector: 'ytube-client-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent {
  @Input() public name: string = '';

  public readonly nameDefault: string = NAME_DEFAULT;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'profile-btn',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/profile-button-icon.svg'),
    );
  }
}
