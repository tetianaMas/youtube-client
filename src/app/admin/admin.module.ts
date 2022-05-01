import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomCardsEffects } from '../redux/effects/customCards.effects';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, EffectsModule.forFeature([CustomCardsEffects])],
})
export class AdminModule {}
