import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { YtubeClientRoutingModule } from './ytube-client-routing.module';
import { StoreModule } from '@ngrx/store';
import { customCardsReducer } from './redux/customCards/reducers/customCards.reducers';

import { YtubeClientComponent } from './ytube-client.component';
import { videoCardsReducer } from './redux/videoCards/reducers/videoCards.reducers';
import { metaReducers } from './redux/app.meta-reducers';

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
  ],
  bootstrap: [YtubeClientComponent],
})
export default class YtubeClientModule {}
