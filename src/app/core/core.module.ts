import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LocalstorageService } from './services/localstorage.service';

@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, ProfilePanelComponent, SettingsButtonComponent, LogoComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [AuthGuardService, LocalstorageService],
})
export class CoreModule {}
