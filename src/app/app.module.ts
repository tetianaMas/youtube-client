import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchPanelComponent from './components/header/search-panel/search-panel.component';
import CardListComponent from './components/card-list/card-list.component';
import CardItemComponent from './components/card-list/card-item/card-item.component';
import FiltersComponent from './components/filters/filters.component';
import ProfilePanelComponent from './components/header/profile-panel/profile-panel.component';
import StatisticsPanelComponent from './components/card-list/card-item/statistics-panel/statistics-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    CardListComponent,
    CardItemComponent,
    FiltersComponent,
    ProfilePanelComponent,
    StatisticsPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
