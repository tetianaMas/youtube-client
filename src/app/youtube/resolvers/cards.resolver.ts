import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from '../../youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class CardsResolver implements Resolve<Card | void> {
  constructor(private youtubeService: YoutubeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Card | void {
    const card = this.youtubeService.getCardById(route.paramMap.get('id') || '');
    if (card) {
      return card;
    } else {
      this.router.navigateByUrl('404', { skipLocationChange: true });
    }
  }
}
