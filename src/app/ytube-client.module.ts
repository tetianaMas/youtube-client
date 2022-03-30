import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './ytube-client-routing.module';
import { YtubeClientComponent } from './ytube-client.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-list/card-item/card-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortFilterComponent } from './components/filters/sort-filter/sort-filter.component';
import { SearchFilterComponent } from './components/filters/search-filter/search-filter.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { StatisticsPanelComponent } from './components/card-list/card-item/statistics-panel/statistics-panel.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LogoComponent } from './components/header/logo/logo.component';

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
    StatisticsPanelComponent,
    SettingsButtonComponent,
    LogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [YtubeClientComponent],
})
export default class AppModule {}
