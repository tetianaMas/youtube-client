import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const ICON_NOT_FOUND_PATH = './assets/icons/page-not-found-icon.svg';

@Component({
  selector: 'ytube-client-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  readonly notFoundIcon: string = 'not-found';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(this.notFoundIcon, sanitizer.bypassSecurityTrustResourceUrl(ICON_NOT_FOUND_PATH));
  }
}
