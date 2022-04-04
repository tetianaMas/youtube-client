import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { DateStatusColorDirective } from './components/card-item/date-status-color.directive';
import { SortByPipe } from './components/card-list/sort-by.pipe';
import { FilterByPipe } from './components/card-list/filter-by.pipe';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { StatPanelComponent } from './components/stat-panel/stat-panel.component';
import { StatPanelItemComponent } from './components/stat-panel-item/stat-panel-item.component';
import { MainPageComponent } from './pages/main/main.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    CardListComponent,
    CardItemComponent,
    FiltersComponent,
    SortFilterComponent,
    SearchFilterComponent,
    DateStatusColorDirective,
    SortByPipe,
    FilterByPipe,
    VideoThumbnailComponent,
    VideoTitleComponent,
    StatPanelComponent,
    StatPanelItemComponent,
    MainPageComponent,
    DetailedInfoComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule, HttpClientModule],
  exports: [MainPageComponent, DetailedInfoComponent],
  providers: [CardService],
})
export class YoutubeModule {}
