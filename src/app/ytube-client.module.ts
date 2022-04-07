import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { YtubeClientRoutingModule } from './ytube-client-routing.module';

import { YtubeClientComponent } from './ytube-client.component';

@NgModule({
  declarations: [YtubeClientComponent],
  imports: [BrowserModule, YtubeClientRoutingModule, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [YtubeClientComponent],
})
export default class YtubeClientModule {}
