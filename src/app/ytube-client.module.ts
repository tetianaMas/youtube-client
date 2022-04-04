import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './ytube-client-routing.module';

import { YtubeClientComponent } from './ytube-client.component';

@NgModule({
  declarations: [YtubeClientComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [YtubeClientComponent],
})
export default class YtubeModule {}
