import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-list/card-item/card-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { InfoPanelComponent } from './components/card-list/card-item/info-panel/info-panel.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPanelComponent,
    CardListComponent,
    CardItemComponent,
    FiltersComponent,
    InfoPanelComponent,
    ProfilePanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
