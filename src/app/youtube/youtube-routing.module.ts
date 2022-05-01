import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsResolver } from './resolvers/cards.resolver';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { MainPageComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: ':id',
    component: DetailedInfoComponent,
    resolve: {
      card: CardsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
