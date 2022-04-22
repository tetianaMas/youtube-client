import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { map, mergeMap } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { CardActionType } from '../actionTypes.model';

type SearchActionType = {
  search: string;
} & TypedAction<CardActionType.searchVideoCards>;

@Injectable()
export class VideoCardsEffects {
  constructor(private actions$: Actions, private ytService: YoutubeService) {}

  searchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SearchActionType>(CardActionType.searchVideoCards),
      mergeMap((action) =>
        this.ytService.searchCards(action.search).pipe(
          map((videos) => {
            return { type: CardActionType.addVideoCards, videoCards: videos };
          }),
        ),
      ),
    ),
  );
}
