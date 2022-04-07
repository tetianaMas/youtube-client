import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
