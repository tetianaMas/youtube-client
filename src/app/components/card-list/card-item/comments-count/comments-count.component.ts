import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
})
export class CommentsCountComponent {
  @Input() public count!: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'comments-count',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/comments-count.svg'),
    );
  }
}
