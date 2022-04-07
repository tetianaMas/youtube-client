import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IStatistics } from '../../models/search-response.model';

const ICON_PATH = './assets/icons/';

enum Icons {
  viewsCount = 'views-count',
  likesCount = 'likes-count',
  dislikesCount = 'dislikes-count',
  commentsCount = 'comments-count',
}

@Component({
  selector: 'ytube-client-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.scss'],
})
export class StatPanelComponent {
  @Input() statistics: IStatistics | null = null;

  icons = Icons;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    Object.values(this.icons).forEach((icon: Icons) => {
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(this.getIconPath(icon)));
    });
  }

  private getIconPath(name: string): string {
    return `${ICON_PATH}${name}.svg`;
  }
}
