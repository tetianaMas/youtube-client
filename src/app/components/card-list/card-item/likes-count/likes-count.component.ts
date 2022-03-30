import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ytube-client-likes-count',
  templateUrl: './likes-count.component.html',
})
export class LikesCountComponent {
  @Input() public count: string | void = '';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('likes-count', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/likes-count.svg'));
  }
}
