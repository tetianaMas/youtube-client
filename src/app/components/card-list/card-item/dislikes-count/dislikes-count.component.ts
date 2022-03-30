import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ytube-dislikes-count',
  templateUrl: './dislikes-count.component.html',
})
export class DislikesCountComponent {
  @Input() public count: string | void = '';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'dislikes-count',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/dislikes-count.svg'),
    );
  }
}
