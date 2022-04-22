import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { YtubeClientRoutingModule } from './ytube-client-routing.module';
import { StoreModule } from '@ngrx/store';
import { customCardsReducer } from './redux/reducers/customCards.reducers';
import { videoCardsReducer } from './redux/reducers/videoCards.reducers';
import { metaReducers } from './redux/meta-reducers/lsState.meta-reducers';

import { YtubeClientComponent } from './ytube-client.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [YtubeClientComponent],
  imports: [
    BrowserModule,
    YtubeClientRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { customCards: customCardsReducer, videoCards: videoCardsReducer },
      { metaReducers: metaReducers },
    ),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [YtubeClientComponent],
})
export default class YtubeClientModule {}
