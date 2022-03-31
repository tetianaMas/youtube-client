import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IStatistics } from 'src/app/shared/models/search-response.model';

enum IconsPaths {
  viewsCount = './assets/icons/views-count.svg',
  likesCount = './assets/icons/likes-count.svg',
  dislikesCount = './assets/icons/dislikes-count.svg',
  commentsCount = './assets/icons/comments-count.svg',
}

@Component({
  selector: 'ytube-client-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.scss'],
})
export class StatPanelComponent {
  @Input() public statistics: IStatistics | void = undefined;

  public viewCountIconName: string = 'views-count';

  public likesCountIconName: string = 'likes-count';

  public dislikesCountIconName: string = 'dislikes-count';

  public commentsCountIconName: string = 'comments-count';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(this.viewCountIconName, sanitizer.bypassSecurityTrustResourceUrl(IconsPaths.viewsCount));
    iconRegistry.addSvgIcon(this.likesCountIconName, sanitizer.bypassSecurityTrustResourceUrl(IconsPaths.likesCount));
    iconRegistry.addSvgIcon(
      this.dislikesCountIconName,
      sanitizer.bypassSecurityTrustResourceUrl(IconsPaths.dislikesCount),
    );
    iconRegistry.addSvgIcon(
      this.commentsCountIconName,
      sanitizer.bypassSecurityTrustResourceUrl(IconsPaths.commentsCount),
    );
  }
}
