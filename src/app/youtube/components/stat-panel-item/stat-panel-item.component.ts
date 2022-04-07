import { Component, Input } from '@angular/core';

@Component({
  selector: 'ytube-client-stat-panel-item',
  templateUrl: './stat-panel-item.component.html',
  styleUrls: ['./stat-panel-item.component.scss'],
})
export class StatPanelItemComponent {
  @Input() count: string = '';

  @Input() iconName: string = '';
}
