import { Component, Input } from '@angular/core';
import { IStatistics } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-statistics-panel',
  templateUrl: './statistics-panel.component.html',
  styleUrls: ['./statistics-panel.component.scss'],
})
export class StatisticsPanelComponent {
  @Input() public statistic!: IStatistics;
}
