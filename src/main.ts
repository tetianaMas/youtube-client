import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import YtubeClientModule from './app/ytube-client.module';
import environment from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(YtubeClientModule)
  .catch((err) => {
    console.error(err);
  });
