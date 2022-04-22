import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { YoutubeService } from './services/youtube.service';
import { CardsResolver } from './resolvers/cards.resolver';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../interceptors';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-list/card-item/card-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortFilterComponent } from './components/filters/sort-filter/sort-filter.component';
import { SearchFilterComponent } from './components/filters/search-filter/search-filter.component';
import { DateStatusColorDirective } from './shared/date-status-color.directive';
import { SortByPipe } from './components/card-list/sort-by.pipe';
import { FilterByPipe } from './components/card-list/filter-by.pipe';
import { VideoThumbnailComponent } from './components/card-list/card-item/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './components/card-list/card-item/video-title/video-title.component';
import { StatPanelComponent } from './components/card-list/card-item/stat-panel/stat-panel.component';
import { StatPanelItemComponent } from './components/card-list/card-item/stat-panel/stat-panel-item/stat-panel-item.component';
import { MainPageComponent } from './pages/main/main.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { SortFilterButtonComponent } from './components/filters/sort-filter/sort-filter-button/sort-filter-button.component';
import { EffectsModule } from '@ngrx/effects';
import { VideoCardsEffects } from '../redux/effects/videoCards.effects';

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
    DetailedCardComponent,
    SortFilterButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    YoutubeRoutingModule,
    MaterialModule,
    HttpClientModule,
    EffectsModule.forFeature([VideoCardsEffects]),
  ],
  providers: [YoutubeService, CardsResolver, httpInterceptorProviders],
})
export class YoutubeModule {}
