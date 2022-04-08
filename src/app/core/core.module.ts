import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { YoutubeService } from './services/youtube.service';
import { LocalstorageService } from './services/localstorage.service';
import { CardsResolver } from './resolvers/cards.resolver';
import { FiltersService } from './services/filters.service';

@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, ProfilePanelComponent, SettingsButtonComponent, LogoComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [CardsResolver, YoutubeService, AuthGuardService, LocalstorageService, FiltersService],
})
export class CoreModule {}
