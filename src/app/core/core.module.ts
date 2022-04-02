import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, ProfilePanelComponent, SettingsButtonComponent, LogoComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
