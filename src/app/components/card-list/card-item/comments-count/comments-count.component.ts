import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ytube-client-comments-count',
  templateUrl: './comments-count.component.html',
})
export class CommentsCountComponent {
  @Input() public count: string | void = '';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'comments-count',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/comments-count.svg'),
    );
  }
}
