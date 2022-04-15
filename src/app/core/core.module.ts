import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LocalstorageService } from './services/localstorage.service';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchPanelComponent,
    ProfilePanelComponent,
    SettingsButtonComponent,
    LogoComponent,
    LoaderComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, MaterialModule],
  exports: [HeaderComponent, LoaderComponent, ErrorComponent],
  providers: [AuthGuardService, LocalstorageService],
})
export class CoreModule {}
