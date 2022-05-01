import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from '../../youtube/services/youtube.service';

@Injectable()
export class CardsResolver implements Resolve<Observable<Observable<Card | void>>> {
  constructor(private youtubeService: YoutubeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Card | void>> {
    return of(
      this.youtubeService.searchCardById(route.paramMap.get('id') || '').pipe(
        catchError(() => {
          this.router.navigateByUrl('404', { skipLocationChange: true });
          return EMPTY;
        }),
      ),
    );
  }
}
