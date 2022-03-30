import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ytube-client-views-count',
  templateUrl: './views-count.component.html',
})
export class ViewsCountComponent {
  @Input() public count: string | void = '';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('views-count', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/views-count.svg'));
  }
}
