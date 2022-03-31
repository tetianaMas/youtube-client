import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material.module';
import AppRoutingModule from './ytube-client-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { YtubeClientComponent } from './ytube-client.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-list/card-item/card-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortFilterComponent } from './components/filters/sort-filter/sort-filter.component';
import { SearchFilterComponent } from './components/filters/search-filter/search-filter.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ButtonComponent } from './components/card-list/card-item/button/button.component';
import { DateStatusColorDirective } from './components/card-list/card-item/date-status-color.directive';
import { SortByPipe } from './components/card-list/card-item/sort-by.pipe';
import { FilterByPipe } from './components/card-list/card-item/filter-by.pipe';
import { VideoThumbnailComponent } from './components/card-list/card-item/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './components/card-list/card-item/video-title/video-title.component';
import { StatPanelComponent } from './components/card-list/card-item/stat-panel/stat-panel.component';
import { StatPanelItemComponent } from './components/card-list/card-item/stat-panel/stat-panel-item/stat-panel-item.component';

@NgModule({
  declarations: [
    YtubeClientComponent,
    HeaderComponent,
    SearchPanelComponent,
    CardListComponent,
    CardItemComponent,
    FiltersComponent,
    SortFilterComponent,
    SearchFilterComponent,
    ProfilePanelComponent,
    SettingsButtonComponent,
    LogoComponent,
    ButtonComponent,
    DateStatusColorDirective,
    SortByPipe,
    FilterByPipe,
    VideoThumbnailComponent,
    VideoTitleComponent,
    StatPanelComponent,
    StatPanelItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, MaterialModule],
  providers: [],
  bootstrap: [YtubeClientComponent],
})
export default class YtubeModule {}
