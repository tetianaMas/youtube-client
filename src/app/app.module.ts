import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ViewsCountComponent } from './components/card-list/card-item/statistics-panel/views-count/views-count.component';
import { LikesCountComponent } from './components/card-list/card-item/statistics-panel/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/card-list/card-item/statistics-panel/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/card-list/card-item/statistics-panel/comments-count/comments-count.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/card-list/card-item/button/button.component';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
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
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
