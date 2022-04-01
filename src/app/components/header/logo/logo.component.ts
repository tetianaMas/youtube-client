import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const ICON_LOGO_PATH: string = './assets/icons/logo.svg';

@Component({
  selector: 'ytube-client-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl(ICON_LOGO_PATH));
  }
}
