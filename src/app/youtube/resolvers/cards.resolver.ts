import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from '../../youtube/services/youtube.service';

@Injectable()
export class CardsResolver implements Resolve<Observable<Observable<Card | void>>> {
  constructor(private youtubeService: YoutubeService, private router: Router, private lsService: LocalstorageService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Card | void>> {
    const id = route.paramMap.get('id');
    let card = of((this.lsService.getItem<Card[]>('cards') || []).find((elem) => elem.id === id));

    if (!card) {
      card = this.youtubeService.searchCardById(route.paramMap.get('id') || '');
    }
    return of(
      card.pipe(
        catchError(() => {
          this.router.navigateByUrl('404', { skipLocationChange: true });
          return EMPTY;
        }),
      ),
    );
  }
}
